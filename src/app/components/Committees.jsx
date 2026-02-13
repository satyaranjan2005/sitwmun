import React from 'react'
import Image from 'next/image'

const committees = [
    {
        name: 'UNHRC',
        fullName: 'COMMITTEE',
        image: '/comm1.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae magna.'
    },
    {
        name: 'UNSC',
        fullName: 'COMMITTEE',
        image: '/comm2.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae magna.'
    },
    {
        name: 'DISEC',
        fullName: 'COMMITTEE',
        image: '/comm3.svg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae magna.'
    }
]

const Committees = () => {
    return (
        <section id="committees" className="py-12 sm:py-16 md:py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#1a365d] mb-8 sm:mb-12 md:mb-16">
                    OUR COMMITTEES
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto justify-items-center">
                    {committees.map((committee, index) => (
                        <div 
                            key={index}
                            className="text-center group"
                        >
                            <div className="mx-auto mb-4 hover:scale-105 transition-transform duration-300 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]">
                                <Image
                                    src={committee.image}
                                    alt={committee.name}
                                    width={160}
                                    height={160}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Committees
