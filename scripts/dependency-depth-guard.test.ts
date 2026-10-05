import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const consumer = createRequire(require.resolve('micromatch/package.json'));
const braces = consumer('braces');

test('pins reviewed depth guard and preserves normal patterns', () => {
  const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
  const entries = Object.entries(lock.packages).filter(([path]) => path.endsWith('/braces'));
  assert.equal(entries.length, 1);
  const entry = entries[0][1] as Record<string, string>;
  assert.equal(entry.name, '@dieub/braces-depth-guard');
  assert.equal(entry.version, '3.0.3-pn.3');
  assert.equal(entry.integrity, 'sha512-QY+Uq4s42STyIMPoRkBuUZfYyvz0uZuwuUburLwMx5N+lWqnHHaBxcKPtgKVKjTyFnS1q4ivKu9Wxi4VG7FE9Q==');
  assert.deepEqual(braces.expand('src/**/*.{ts,tsx}'), ['src/**/*.ts', 'src/**/*.tsx']);
  assert.deepEqual(braces.expand('{a,b{1..2}}'), ['a', 'b1', 'b2']);
});

test('rejects deep strings, ASTs and option bypasses', () => {
  for (const [open, close] of [['{', '}'], ['(', ')'], ['{(', ')}']]) {
    for (const method of ['parse', 'compile', 'expand', 'stringify']) {
      assert.throws(() => braces[method](open.repeat(2000) + 'x' + close.repeat(2000)), /exceeds max depth/);
    }
  }
  let ast: object = { type: 'text', value: 'x' };
  for (let i = 0; i < 1000; i++) ast = { type: 'brace', open: true, close: true, commas: 1, nodes: [ast] };
  for (const method of ['compile', 'expand', 'stringify']) {
    assert.throws(() => braces[method]({ type: 'root', nodes: [ast] }), /exceeds max depth/);
  }
  for (const maxDepth of [Infinity, NaN, 10000, '10000', false]) {
    assert.throws(() => braces.compile('{'.repeat(101) + 'x' + '}'.repeat(101), { maxDepth }), /exceeds max depth/);
  }
});
