import React from 'react'

const organisers = [
    {
        name: 'Dr. Tyagraj Thakur',
        role: 'FIC, Literary Club',
        image: '/organisers/tyagrajsir.png'
    },
    {
        name: 'Mr. Amlan Abhijjeet Mishra',
        role: 'Secretary, Literary Club, Secretary Ammenities',
        image: '/organisers/amlan.jpeg'
    },
    {
        name: 'Mr Rudra Pasand Das',
        role: 'Coordinator, Literary Club',
        image: '/organisers/rudra.jpeg'
    },
    {
        name: 'Ms. Alisha Patel',
        role: 'Coordinator, Literary Club',
        image: '/organisers/alisha.jpeg'
    },
    {
        name: 'Ms. Rubi Kumari',
        role: 'Secretary Academics',
        image: '/organisers/rubi.jpeg'
    },
    {
        name: 'Mr. Sourav',
        role: 'Joint Secretary, Literary Club',
        image: '/organisers/sourav.jpeg'
    },
    {
        name: 'Mr. Oshan Khati',
        role: 'Coordinator, Literary Club',
        image: '/organisers/oshan.jpeg'
    },
    {
        name: 'Ms. Asmita Soni',
        role: 'Coordinator, Literary Club',
        image: '/organisers/asmita.png'
    },
    {
        name: 'Mr. Rahul Pattnaik',
        role: 'Coordinator, Literary Club',
        image: '/organisers/rahul.jpeg'
    },
    {
        name: 'Mr. Rishi Raj',
        role: 'Coordinator, Literary Club',
        image: '/organisers/rishi.png'
    },
    {
        name: 'Ms. Pooja Mishra',
        role: 'Coordinator, Literary Club',
        image: '/organisers/pooja.jpeg'
    },
]

const Organisers = () => {
    return (
        <section id="secretariat" className="py-12 sm:py-16 md:py-20 bg-[#CAE4FB]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1a365d] mb-8 sm:mb-12 md:mb-16">
                    ORGANISERS
                </h2>
                
                <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 flex flex-col items-center">
                    {/* First Row - 1 Card */}
                    <div className="flex justify-center items-center w-full">
                        <div className="text-center group flex flex-col items-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200 group-hover:ring-4 ring-[#2563eb] transition-all">
                                {organisers[0].image ? (
                                    <img src={organisers[0].image} alt={organisers[0].name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-4xl font-bold">
                                        {organisers[0].name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <h3 className="font-bold text-[#1a365d] mb-1 text-xs sm:text-sm md:text-base lg:text-lg">
                                {organisers[0].name}
                            </h3>
                            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                                {organisers[0].role}
                            </p>
                        </div>
                    </div>

                    {/* Second Row - 4 Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center place-items-center w-full">
                        {organisers.slice(1, 5).map((organiser, index) => (
                            <div 
                                key={index + 1}
                                className="text-center group flex flex-col items-center w-full max-w-[200px]"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200 group-hover:ring-4 ring-[#2563eb] transition-all">
                                    {organiser.image ? (
                                        <img src={organiser.image} alt={organiser.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                                            {organiser.name.charAt(0)}
                                        </div>
                                    )}  
                                </div>
                                <h3 className="font-bold text-[#1a365d] mb-1 text-[11px] sm:text-xs md:text-sm lg:text-base h-8 flex items-center justify-center">
                                    {organiser.name}
                                </h3>
                                <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs h-8 flex items-center justify-center">
                                    {organiser.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Third Row - 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto justify-items-center place-items-center w-full">
                        {organisers.slice(5, 8).map((organiser, index) => (
                            <div 
                                key={index + 5}
                                className="text-center group flex flex-col items-center w-full max-w-[200px]"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200 group-hover:ring-4 ring-[#2563eb] transition-all">
                                    {organiser.image ? (
                                        <img src={organiser.image} alt={organiser.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                                            {organiser.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-[#1a365d] mb-1 text-[11px] sm:text-xs md:text-sm lg:text-base h-8 flex items-center justify-center">
                                    {organiser.name}
                                </h3>
                                <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs h-8 flex items-center justify-center">
                                    {organiser.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Fourth Row - 3 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto justify-items-center place-items-center w-full">
                        {organisers.slice(8, 11).map((organiser, index) => (
                            <div 
                                key={index + 8}
                                className="text-center group flex flex-col items-center w-full max-w-[200px]"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200 group-hover:ring-4 ring-[#2563eb] transition-all">
                                    {organiser.image ? (
                                        <img src={organiser.image} alt={organiser.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                                            {organiser.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-[#1a365d] mb-1 text-[11px] sm:text-xs md:text-sm lg:text-base h-8 flex items-center justify-center">
                                    {organiser.name}
                                </h3>
                                <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs h-8 flex items-center justify-center">
                                    {organiser.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Organisers
