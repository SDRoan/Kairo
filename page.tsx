'use client';
import { useState } from 'react';
import AmountInput from '@/components/AmountInput'; // 👈 import your component

export default function Page() {
  const [lastAmount, setLastAmount] = useState<number | null>(null);

  // function that receives the amount from AmountInput
  const handleCheck = (amount: number) => {
    setLastAmount(amount);
    // later we’ll connect this to the backend
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 px-4">
      <h1 className="text-3xl font-bold">Can I afford this?</h1>
      <p className="mt-2 text-neutral-600">
        Start by uploading your CSV or entering an amount.
      </p>

      {/* 👇 your new component */}
      <AmountInput onCheck={handleCheck} />

      {lastAmount !== null && (
        <p className="mt-4 text-sm text-neutral-600">
          You checked: <span className="font-medium">${lastAmount}</span>
        </p>
      )}
    </main>
  );
}
