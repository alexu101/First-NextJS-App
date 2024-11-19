'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => {
          // Attempt to recover by resetting the error boundary
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}
