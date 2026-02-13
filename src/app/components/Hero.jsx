import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen bg-[#CAE4FB] overflow-hidden">
            {/* Background World Map */}
            <div className="absolute inset-0 opacity-60">
                <Image 
                    src="/world_map.svg" 
                    alt="World Map Background" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="pointer-events-none"
                />
            </div>

            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 border border-[#1a365d]/30 rounded-full"></div>
                <div className="absolute top-40 right-20 w-96 h-96 border border-[#2563eb]/20 rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-48 h-48 border border-[#1a365d]/25 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 min-h-screen">
                {/* Left Content */}
                <div className="lg:w-1/2 text-[#1a365d] z-10 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                    {/* Presented By */}
                    <div className="inline-block mx-auto lg:mx-0">
                        <p className="text-sm md:text-base text-[#2563eb] font-semibold uppercase tracking-widest mb-2">
                            Silicon Literary Club Presents
                        </p>
                        <div className="h-0.5 w-24 bg-[#2563eb]"></div>
                    </div>
                    
                    <div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 md:mb-4 leading-tight tracking-tight">
                            Model United<br />Nations 2026
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#2563eb] font-semibold">
                            Diplomacy, Dialogue, Debate
                        </p>
                    </div>
                    
                    {/* Event Details - One Line */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 text-[#1a365d] py-2 md:py-4">
                        {/* Date */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs sm:text-base md:text-lg font-semibold">February 21, 2026</span>
                        </div>
                        
                        <div className="hidden sm:block w-px h-6 bg-[#2563eb]/30"></div>
                        
                        {/* Time */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs sm:text-base md:text-lg font-semibold">1 PM Onwards</span>
                        </div>
                        
                        <div className="hidden sm:block w-px h-6 bg-[#2563eb]/30"></div>
                        
                        {/* Venue */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs sm:text-base md:text-lg font-semibold">Seminar Hall</span>
                        </div>
                    </div>
                </div>
                
                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                        <Image 
                            src="/logo_3.svg" 
                            alt="MUN Logo" 
                            width={700} 
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero


