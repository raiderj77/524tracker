'use client';

import { useState } from 'react';
import { pointsMilesValuations, getProgramByName, formatCents } from '@/lib/pointsMilesData';
import { PrintResultsButton } from './PrintResultsButton';

interface VerdictResult {
  verdict: string;
  color: string;
  explanation: string;
}

export default function PointsValueCalculatorClient() {
  const [selectedProgram, setSelectedProgram] = useState<string>('Chase Ultimate Rewards');
  const [pointsRequired, setPointsRequired] = useState<string>('');
  const [cashPrice, setCashPrice] = useState<string>('');
  const [result, setResult] = useState<{
    centsPerPoint: number;
    typicalLow: number;
    typicalHigh: number;
    verdict: VerdictResult;
  } | null>(null);

  const handleCalculate = () => {
    const points = parseFloat(pointsRequired);
    const cash = parseFloat(cashPrice);

    if (!points || !cash || points <= 0 || cash <= 0) {
      alert('Please enter valid numbers for both points and cash price.');
      return;
    }

    const program = getProgramByName(selectedProgram);
    if (!program) return;

    // Calculate the actual value of this specific redemption
    const centsPerPoint = (cash / points) * 100;

    // Determine verdict based on typical range
    let verdict: VerdictResult;

    if (centsPerPoint > program.centsPerPointHigh * 1.05) {
      verdict = {
        verdict: 'Excellent redemption',
        color: 'text-green-700',
        explanation: `At ${formatCents(centsPerPoint)}, this redemption significantly beats the typical ${formatCents(program.centsPerPointLow)}-${formatCents(program.centsPerPointHigh)} range. This is a premium use of your points.`
      };
    } else if (centsPerPoint >= program.centsPerPointLow && centsPerPoint <= program.centsPerPointHigh) {
      verdict = {
        verdict: 'Good redemption',
        color: 'text-blue-700',
        explanation: `At ${formatCents(centsPerPoint)}, this redemption falls squarely within the typical ${formatCents(program.centsPerPointLow)}-${formatCents(program.centsPerPointHigh)} range. This is a solid redemption.`
      };
    } else if (centsPerPoint > program.centsPerPointLow * 0.95 && centsPerPoint < program.centsPerPointLow) {
      verdict = {
        verdict: 'Fair redemption',
        color: 'text-yellow-700',
        explanation: `At ${formatCents(centsPerPoint)}, this redemption is slightly below the typical range of ${formatCents(program.centsPerPointLow)}-${formatCents(program.centsPerPointHigh)}. Consider shopping around for better options.`
      };
    } else {
      verdict = {
        verdict: 'Poor redemption',
        color: 'text-red-700',
        explanation: `At ${formatCents(centsPerPoint)}, this redemption is well below the typical ${formatCents(program.centsPerPointLow)}-${formatCents(program.centsPerPointHigh)} range. You would likely get better value by either finding a different redemption or paying cash.`
      };
    }

    setResult({
      centsPerPoint,
      typicalLow: program.centsPerPointLow,
      typicalHigh: program.centsPerPointHigh,
      verdict
    });
  };

  const programOptions = pointsMilesValuations.map(p => p.program);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg border border-gray-200">
      <div className="space-y-6">
        {/* Program Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Select Your Rewards Program
          </label>
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {programOptions.map(prog => (
              <option key={prog} value={prog}>
                {prog}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-gray-600">
            {getProgramByName(selectedProgram)?.category}
          </p>
        </div>

        {/* Points Required Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Points or Miles Required
          </label>
          <input
            type="number"
            value={pointsRequired}
            onChange={(e) => setPointsRequired(e.target.value)}
            placeholder="e.g., 50000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-1 text-xs text-gray-600">
            How many points or miles will this specific award cost?
          </p>
        </div>

        {/* Cash Price Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Cash Price of the Same Award
          </label>
          <div className="flex items-center">
            <span className="text-lg text-gray-700 mr-2">$</span>
            <input
              type="number"
              value={cashPrice}
              onChange={(e) => setCashPrice(e.target.value)}
              placeholder="e.g., 800"
              step="0.01"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <p className="mt-1 text-xs text-gray-600">
            What would you pay for this flight, hotel, or award if buying with cash?
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate Value
        </button>

        {/* Results */}
        {result && (
          <div data-printable-results className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-5">
            <div className="flex justify-end">
              <PrintResultsButton />
            </div>
            {/* Verdict Card */}
            <div className={`p-4 rounded-lg border-2 border-gray-200 bg-white`}>
              <p className={`text-lg font-bold ${result.verdict.color}`}>
                {result.verdict.verdict}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                {result.verdict.explanation}
              </p>
            </div>

            {/* Value Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Your Redemption Value
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatCents(result.centsPerPoint)}
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Typical Range
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatCents(result.typicalLow)}-{formatCents(result.typicalHigh)}
                </p>
              </div>
            </div>

            {/* Program Details */}
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                About This Program
              </p>
              <p className="text-xs text-blue-800 leading-relaxed">
                {getProgramByName(selectedProgram)?.sourceNote}
              </p>
            </div>

            {/* Interpretation Guide */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-semibold text-amber-900 uppercase tracking-wide mb-2">
                How to Read This
              </p>
              <p className="text-xs text-amber-900 leading-relaxed">
                The cents-per-point value shows what each point is &ldquo;worth&rdquo; in this specific redemption. Higher is better. We compare your redemption against that program&apos;s typical valuation range based on real-world redemption data from July 2026. Because valuations shift with program devaluations and travel pricing, this is a point-in-time estimate, not a guarantee.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
