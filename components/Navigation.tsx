import React from 'react';
import { InteractiveLogo } from './InteractiveLogo';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <InteractiveLogo size={50} showText={false} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
                 <span className="font-serif text-xl font-bold text-elite-navy">ELITE</span>
                 <span className="font-sans text-[0.6rem] font-bold tracking-widest text-elite-gold">VISA CONSULTANTS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-elite-gold font-sans text-sm font-medium transition-colors">SERVICES</a>
            <a href="#about" className="text-gray-600 hover:text-elite-gold font-sans text-sm font-medium transition-colors">ABOUT</a>
            <a href="#process" className="text-gray-600 hover:text-elite-gold font-sans text-sm font-medium transition-colors">PROCESS</a>
            <button className="bg-elite-navy text-white px-6 py-2 rounded-sm font-sans text-sm font-bold tracking-wide hover:bg-elite-gold transition-colors duration-300">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};