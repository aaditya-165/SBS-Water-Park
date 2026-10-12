import React from 'react';
import { Link } from 'react-router';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cyan-50 py-16 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold text-cyan-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Looks like you've taken a wrong turn!</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for has been washed away or doesn't exist. Let's get you back to the splash.
        </p>
        <Button as={Link} to="/" variant="primary" size="lg">GO HOME</Button>
      </div>
    </div>
  );
}
