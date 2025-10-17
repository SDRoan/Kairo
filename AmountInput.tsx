'use client';
import { useState } from 'react';

export default function AmountInput({ onCheck }: { onCheck: (amount: number) => void }) {
  const [value, setValue] = useState('');

  const submit = () => {
    const amt = Number(value.replace(/[^\d.]/g, ''));
    if (!isFinite(amt) || amt <= 0) return;
    onCheck(amt);
  };

  return (
    <div className="mt-6 flex w-full max-w-sm items-center rounded-2xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">
      <span className="mr-2 text-neutral-500">$</span>
      <input
        className="w-full bg-transparent outline-none"
        inputMode="decimal"
        placeholder="Enter amount (e.g., 48)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        aria-label="Amount"
      />
      <button
        onClick={submit}
        className="ml-2 rounded-xl bg-black px-3 py-1.5 text-sm font-medium text-white hover:opacity-90"
      >
        Check
      </button>
    </div>
  );
}
