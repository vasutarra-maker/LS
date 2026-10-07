import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollEffects from './ScrollEffects';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <ScrollEffects />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
