import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollEffects from './ScrollEffects';
import LogoMarquee from './LogoMarquee';

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <ScrollEffects />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <LogoMarquee />
      <Footer />
    </div>
  );
}
