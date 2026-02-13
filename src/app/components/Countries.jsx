import React from 'react'
import Image from 'next/image'

const countries = [
    { name: 'United States', flag: '/flags/usa.svg' },
    { name: 'United Kingdom', flag: '/flags/uk.svg' },
    { name: 'France', flag: '/flags/france.svg' },
    { name: 'Germany', flag: '/flags/germany.svg' },
    { name: 'Japan', flag: '/flags/japan.svg' },
    { name: 'China', flag: '/flags/china.svg' },
    { name: 'Russia', flag: '/flags/russia.svg' },
    { name: 'India', flag: '/flags/india.svg' },
    { name: 'Brazil', flag: '/flags/brazil.svg' },
    { name: 'Canada', flag: '/flags/canada.svg' },
    { name: 'Australia', flag: '/flags/australia.svg' },
    { name: 'South Korea', flag: '/flags/south-korea.svg' },
    { name: 'Italy', flag: '/flags/italy.svg' },
    { name: 'Spain', flag: '/flags/spain.svg' },
    { name: 'Mexico', flag: '/flags/mexico.svg' },
    { name: 'Saudi Arabia', flag: '/flags/saudi-arabia.svg' },
    { name: 'South Africa', flag: '/flags/south-africa.svg' },
    { name: 'Turkey', flag: '/flags/turkey.svg' },
    { name: 'Indonesia', flag: '/flags/indonesia.svg' },
    { name: 'Netherlands', flag: '/flags/netherlands.svg' },
    { name: 'Switzerland', flag: '/flags/switzerland.svg' },
    { name: 'Sweden', flag: '/flags/sweden.svg' },
    { name: 'Norway', flag: '/flags/norway.svg' },
    { name: 'Argentina', flag: '/flags/argentina.svg' },
    { name: 'Egypt', flag: '/flags/egypt.svg' }
]

const Countries = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-[#2563eb]"></div>
                        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="h-px w-12 bg-[#2563eb]"></div>
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 tracking-tight">
                        Participating Countries
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Representing nations from across the globe in diplomatic discourse
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto justify-items-center">
                    {countries.map((country, index) => (
                        <div 
                            key={index}
                            className="group text-center hover:scale-105 transition-transform duration-300 w-full max-w-[140px]"
                        >
                            {/* Flag Image Container */}
                            <div className="w-full h-[90px] relative mb-1.5 p-2">
                                <Image
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            
                            {/* Country Name */}
                            <h3 className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-[#1a365d] group-hover:text-[#2563eb] transition-colors leading-tight">
                                {country.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Countries
