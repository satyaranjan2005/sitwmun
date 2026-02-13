import React from 'react'
import Image from 'next/image'

const AboutLiteraryClub = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563eb] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1a365d] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Left - Image/Logo */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-[#2563eb] opacity-10 rounded-3xl transform rotate-6"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                                <Image 
                                    src="/Literature_club.svg" 
                                    alt="Silicon Literary Club Logo" 
                                    width={400} 
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        {/* Section Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                                <div className="h-px w-12 bg-[#2563eb]"></div>
                                <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <div className="h-px w-12 bg-[#2563eb]"></div>
                            </div>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 tracking-tight">
                                About Silicon Literary Club
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            The Silicon Literary Club is a vibrant community of students passionate about literature, 
                            debate, creative writing, and intellectual discourse. We foster critical thinking, 
                            effective communication, and cultural awareness through various literary activities and events.
                        </p>

                        <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            As part of Silicon Institute of Technology, Sambalpur, our club organizes prestigious 
                            events like Model United Nations (MUN) and Literature of the Fall (LOF), 
                            providing students with platforms to showcase their talents and develop essential skills for 
                            their personal and professional growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutLiteraryClub
