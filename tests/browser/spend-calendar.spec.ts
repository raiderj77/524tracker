import { test, expect } from '@playwright/test';

test('spend deadlines count calendar dates through fall-back and retain edits', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-10-05T03:00:00Z'));
  await page.goto('/spend-tracker');
  await page.getByLabel('Card Name', { exact: true }).fill('Synthetic calendar');
  await page.getByLabel('Spending Target from Offer Terms', { exact: true }).fill('1000');
  await page.getByLabel('Exact Offer Deadline', { exact: true }).fill('2026-11-04');
  await page.getByRole('button', { name: 'Add Card', exact: true }).click();
  const active = page.getByRole('region', { name: 'Active cards', exact: true });
  await expect.soft(active.getByText('31', { exact: true })).toBeVisible();
  await expect.soft(active.getByText('$33/day', { exact: true })).toBeVisible();
  await page.reload();
  await expect(active.getByRole('heading', { name: 'Synthetic calendar' })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Synthetic calendar', exact: true }).click();
  await page.getByLabel('Exact Offer Deadline', { exact: true }).fill('2026-10-04');
  await page.getByRole('button', { name: 'Save Changes', exact: true }).click();
  await expect.soft(active.getByText('Today', { exact: true })).toHaveCount(2);
  await expect.soft(active.getByText('Date passed', { exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Mark Synthetic calendar entry complete', exact: true }).click();
  await expect(active).toHaveCount(0);
});
