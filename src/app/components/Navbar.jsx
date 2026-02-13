'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="px-4 sm:px-6 md:px-10 lg:px-40">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full opacity-10"></div>
                            <Image 
                                src="/logo_3.svg" 
                                alt="MUN Logo" 
                                width={55} 
                                height={55}
                                className="relative z-10"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-[#1a365d] text-sm sm:text-base md:text-lg font-black tracking-tight leading-tight">
                                MODEL UNITED NATIONS
                            </div>
                            <div className="text-[#2563eb] text-[10px] sm:text-xs font-semibold tracking-wider">
                                Silicon Literary Club • SIT Sambalpur
                            </div>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        <a href="#home" className="text-[#1a365d] text-sm font-semibold px-5 py-2 hover:bg-white/60 rounded-lg transition-all duration-200 relative group tracking-wide">
                            Home
                        </a>
                        <a href="#committees" className="text-[#1a365d] text-sm font-semibold px-5 py-2 hover:bg-white/60 rounded-lg transition-all duration-200 relative group tracking-wide">
                            Committees
                        </a>
                        <a href="#agenda" className="text-[#1a365d] text-sm font-semibold px-5 py-2 hover:bg-white/60 rounded-lg transition-all duration-200 relative group tracking-wide">
                            Agenda
                        </a>
                        <a href="#secretariat" className="text-[#1a365d] text-sm font-semibold px-5 py-2 hover:bg-white/60 rounded-lg transition-all duration-200 relative group tracking-wide">
                            Organizers
                        </a>
                        <a href="#contact" className="text-[#1a365d] text-sm font-semibold px-5 py-2 hover:bg-white/60 rounded-lg transition-all duration-200 relative group tracking-wide">
                            Contact
                        </a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-[#1a365d] p-2 hover:bg-white/50 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
                        <div className="flex flex-col p-4 space-y-2">
                            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a365d] text-sm font-semibold px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                                Home
                            </a>
                            <a href="#committees" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a365d] text-sm font-semibold px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                                Committees
                            </a>
                            <a href="#agenda" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a365d] text-sm font-semibold px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                                Agenda
                            </a>
                            <a href="#secretariat" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a365d] text-sm font-semibold px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                                Organizers
                            </a>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a365d] text-sm font-semibold px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
