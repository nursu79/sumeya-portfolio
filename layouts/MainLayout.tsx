import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* TODO: Add SEO meta tags here */}
      <Navbar />
      <main className="pt-24 min-h-screen bg-white dark:bg-black transition-colors">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout; 