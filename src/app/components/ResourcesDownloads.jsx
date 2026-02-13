import React from 'react'

const resources = [
    {
        title: 'Rules & Guidelines (PDF)',
        date: '09/04/2026 04:34, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut aliquid ex ea consequat.',
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                <path d="M14 4C11.79 4 10 5.79 10 8v32c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V14l-10-10H14z"/>
                <path d="M28 4v10h10" fill="white" opacity="0.3"/>
                <path d="M16 24h16M16 30h16M16 36h10" stroke="white" strokeWidth="2"/>
            </svg>
        ),
        downloadIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        )
    },
    {
        title: 'Position Paper Template',
        date: '09/04/2026 04:34, 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut aliquid ex ea consequat.',
        icon: (
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor">
                <path d="M14 4C11.79 4 10 5.79 10 8v32c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V14l-10-10H14z"/>
                <path d="M28 4v10h10" fill="white" opacity="0.3"/>
                <circle cx="24" cy="28" r="8" fill="white" opacity="0.5"/>
            </svg>
        ),
        downloadIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        )
    }
]

const ResourcesDownloads = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-[#CAE4FB]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#1a365d] mb-8 sm:mb-12 md:mb-16">
                    RESOURCES & DOWNLOADS
                </h2>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {resources.map((resource, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-red-600">
                                    {resource.icon}
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                                        {resource.downloadIcon}
                                    </button>
                                </div>
                            </div>
                            
                            <h3 className="text-base sm:text-lg font-bold text-[#1a365d] mb-2">
                                {resource.title}
                            </h3>
                            <p className="text-gray-400 text-xs mb-3">
                                {resource.date}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                {resource.description}
                            </p>
                            
                            <button className="bg-[#2563eb] text-white px-6 py-2 rounded font-semibold hover:bg-[#1a365d] transition-colors text-sm">
                                DOWNLOAD
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResourcesDownloads
