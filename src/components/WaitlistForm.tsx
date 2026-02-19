'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else if (res.status === 422) {
        setStatus('error');
        setErrorMsg('Please enter a valid email address.');
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-app-xl bg-success/10 border border-success/20 px-6 py-4 text-center max-w-md w-full">
        <p className="font-heading font-semibold text-success text-lg">You&apos;re on the list! 🎉</p>
        <p className="text-text-secondary text-sm mt-1">We&apos;ll reach out when Daily Vitamins launches.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 rounded-app border border-border bg-surface text-app-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="px-6 py-3 rounded-app bg-primary text-white font-heading font-semibold text-sm whitespace-nowrap hover:bg-primary-dark transition disabled:opacity-60 disabled:cursor-not-allowed shadow-card"
        >
          {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
        </button>
      </form>
      {(status === 'error' || status === 'duplicate') && (
        <p className="text-sm text-red-500 mt-2">
          {status === 'duplicate' ? 'This email is already on the waitlist!' : errorMsg}
        </p>
      )}
    </div>
  );
}
