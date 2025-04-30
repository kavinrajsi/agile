import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
    <h1 className="text-6xl font-extrabold mb-4">404</h1>
    <p className="text-2xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
    <Link
      to="/"
      className="px-6 py-3 rounded bg-primary text-black font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
    >
      Go Home
    </Link>
  </section>
);

export default NotFound;
