import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#1a365d] text-white py-8 sm:py-10 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center sm:text-left">
                    {/* Logos */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
                        <div className="bg-white/90 p-3 sm:p-4 rounded-xl shadow-lg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/logo_3.svg" 
                                    alt="MUN Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white/90 p-3 sm:p-4 rounded-xl shadow-lg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/Literature_club.svg" 
                                    alt="Silicon Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Venue */}
                    <div>
                        <h3 className="font-bold text-sm sm:text-lg mb-4 sm:mb-6">VENUE</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#60a5fa] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <div className="font-semibold text-white">Seminar Hall</div>
                                    <div>Silicon Institute of Technology</div>
                                    <div>Sambalpur, Odisha</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="font-bold text-sm sm:text-lg mb-4 sm:mb-6">CONTACT</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#60a5fa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-white">Mr. Amlan Abhijeet Mishra</div>
                                        <div className="text-xs">+91 70085 19551</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#60a5fa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-white">Ms. Alisha Patel</div>
                                        <div className="text-xs">+91 78469 10696</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#60a5fa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <div>
                                        <div className="font-semibold text-white">Mr. Rudra Prasad Das</div>
                                        <div className="text-xs">+91 73259 55022</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm">
                    <p>© Silicon Model United Nations 2026</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
