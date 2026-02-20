'use client'
import React from 'react'

const judges = [
    {
        name: 'Dr. Himanshu Sekhar Mishra',
        role: 'Chief Judge',
        description: 'Asst. Professor, Sambalpur University, Sambalpur.',
        image: '/organisers/image.png'
    },
    {
        name: 'Dr. Simanchal Bag',
        role: 'Asst. Professor',
        description: 'Department of Basic Science, Silicon Institute of Technology, Sambalpur.',
        image: '/organisers/simanchal.jpeg'
    },
    {
        name: 'Dr. Sonalika Mishra',
        role: 'Asst. Professor',
        description: 'Department of Electrical Engineering, Silicon Institute of Technology, Sambalpur.',
        image: '/organisers/sonalika.jpeg'
    }
]

const executives = [
    {
        name: 'Mr. Amlan Abhijeet Mishra',
        role: 'Secretary General',
        description: 'Secretary, Literary Club, Secretary Ammenities',
        image: '/organisers/amlan.jpeg'
    },
    {
        name: 'Mr. Sourav',
        role: 'The Honourable Chair',
        description: 'Joint Secretary, Literary Club',
        image: '/organisers/sourav.jpeg'
    }
]

const JudgesOfficials = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#CAE4FB]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#1a365d] mb-8 sm:mb-12 md:mb-16">
                    JUDGES & OFFICIALS
                </h2>
                
                <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
                    {/* Judges Section */}
                    <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-[#1a365d] mb-6 sm:mb-8">Judges</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-items-center">
                            {judges.map((judge, index) => (
                                <div 
                                    key={index}
                                    className="bg-[#f0f7ff] rounded-xl p-6 hover:shadow-lg transition-shadow w-80 h-auto"
                                >
                                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                                        {judge.image ? (
                                            <img src={judge.image} alt={judge.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-linear-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl font-bold">
                                                {judge.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold text-[#1a365d] mb-1">
                                            {judge.name}
                                        </h4>
                                        <p className="text-[#2563eb] text-sm mb-3">
                                            {judge.role}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {judge.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Executive Section */}
                    <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-[#1a365d] mb-6 sm:mb-8">Executive Board</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto justify-items-center">
                            {executives.map((executive, index) => (
                                <div 
                                    key={index}
                                    className="bg-[#f0f7ff] rounded-xl p-6 hover:shadow-lg transition-shadow w-80 h-auto"
                                >
                                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                                        {executive.image ? (
                                            <img src={executive.image} alt={executive.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-linear-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl font-bold">
                                                {executive.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold text-[#1a365d] mb-1">
                                            {executive.name}
                                        </h4>
                                        <p className="text-[#2563eb] text-sm mb-3">
                                            {executive.role}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {executive.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JudgesOfficials
