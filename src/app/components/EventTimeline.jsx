'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const timelineEvents = [
    {
        title: 'Group Discussion Prelims',
        description: 'Participate in preliminary group discussions to showcase your knowledge, critical thinking, and communication skills. This initial screening will assess your ability to engage in diplomatic discourse and evaluate your potential as a delegate.',
        images: ['/timeline/gd-1.jpg?v=1', '/timeline/gd-2.jpg?v=1', '/timeline/gd-3.jpg?v=1', '/timeline/gd-4.jpg?v=1'],
        date: '12 FEB - 2 PM Onwards',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: 'Allotment of Countries to Selected Candidates',
        description: 'Selected candidates will be assigned their country for MUN final round. Check your WhatsApp group for your assigned nation and any updates. This marks the beginning of your journey as a delegate representing your country.',
        images: ['/timeline/allot-1.jpg?v=1', '/timeline/allot-2.jpg?v=1', '/timeline/allot-3.jpg?v=1', '/timeline/allot-4.jpg?v=1'],
        date: '13 FEB 2026',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Preparation and Research. Crafting the Position Paper',
        description: 'Conduct thorough research on your country\'s policies, historical stance, and current position on agenda topics. Draft a comprehensive position paper outlining your nation\'s perspectives, objectives, and proposed solutions to the committee agenda.',
        images: ['/timeline/research-1.png', '/timeline/research-2.png', '/timeline/research-3.png', '/timeline/research-1.png'],
        date: '14 FEB - 19 FEB 2026',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        title: 'Briefing the House (Moderated Caucuses)',
        description: 'Step into formal debate with moderated caucuses where delegates present their opening statements and positions. Engage in structured discussions led by the chair, addressing key agenda points while adhering to parliamentary procedure and diplomatic protocol.',
        images: ['/timeline/mod-1.jpg', '/timeline/mod-2.jpg', '/timeline/mod-3.jpg', '/timeline/mod-4.jpg'],
        date: '21 FEB 2026',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        )
    },
    {
        title: 'Open House (Unmoderated Caucuses)',
        description: 'In the second round, delegates can ask questions to each other and engage in debates and discussions. They can pass motions and engage in debates.',
        images: ['/timeline/unmod-1.jpg', '/timeline/unmod-2.jpg', '/timeline/unmod-3.jpg', '/timeline/unmod-4.jpg'],
        date: '21 FEB 2026',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        )
    },
    {
        title: 'Jury\'s Shoot',
        description: 'In the final round, the jury will take the privilege to ask questions to the delegates. The delegates have to answer their questions.',
        images: ['/timeline/jury-1.jpeg', '/timeline/jury-2.jpg', '/timeline/jury-3.jpg', '/timeline/jury-4.jpeg'],
        date: '21 FEB 2026',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
]

const EventTimeline = () => {
    const [visibleItems, setVisibleItems] = useState([])
    const [progressHeight, setProgressHeight] = useState(0)
    const itemRefs = useRef([])
    const timelineRef = useRef(null)
    const sectionRef = useRef(null)

    // Get environment variables for dates and URLs
    const eventConfig = [
        {
            showDate: process.env.NEXT_PUBLIC_EVENT1_RESULT_DATE || '2026-02-21 18:00',
            url: process.env.NEXT_PUBLIC_EVENT1_RESULT_URL || '/downloads/gd-prelims-results.pdf'
        },
        {
            showDate: process.env.NEXT_PUBLIC_EVENT2_RESULT_DATE || '2026-02-21 20:00',
            url: process.env.NEXT_PUBLIC_EVENT2_RESULT_URL || '/downloads/country-allotment-results.pdf'
        },
        {
            showDate: process.env.NEXT_PUBLIC_EVENT3_DOWNLOAD_DATE || '2026-02-22 10:00',
            url: process.env.NEXT_PUBLIC_EVENT3_DOWNLOAD_URL || '/downloads/position-paper-template.pdf'
        }
    ]

    // Function to check if button should be shown based on date
    const shouldShowButton = (eventIndex) => {
        if (eventIndex >= 3) return false
        const showDate = new Date(eventConfig[eventIndex].showDate)
        const now = new Date()
        return now >= showDate
    }

    useEffect(() => {
        const observers = []
        
        itemRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleItems((prev) => [...new Set([...prev, index])])
                            }
                        })
                    },
                    {
                        threshold: 0.2,
                        rootMargin: '0px 0px -100px 0px'
                    }
                )
                
                observer.observe(ref)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])

    // Calculate progress line height based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current || !sectionRef.current) return

            const section = sectionRef.current
            const timeline = timelineRef.current
            
            const sectionRect = section.getBoundingClientRect()
            const timelineRect = timeline.getBoundingClientRect()
            
            // Calculate how much of the timeline section is visible/scrolled
            const sectionTop = sectionRect.top
            const sectionHeight = sectionRect.height
            const timelineHeight = timelineRect.height
            const windowHeight = window.innerHeight
            
            // Start progress when section enters viewport
            const scrollStart = windowHeight - sectionTop
            const scrollableHeight = sectionHeight + windowHeight
            const scrollProgress = Math.max(0, Math.min(100, (scrollStart / scrollableHeight) * 100))
            
            // Adjust progress to fill timeline height proportionally
            const adjustedProgress = Math.max(0, Math.min(100, scrollProgress * 1.2))
            
            setProgressHeight(adjustedProgress)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f0f7ff] via-white to-[#f0f7ff] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#1a365d] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563eb] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 bg-[#2563eb]"></div>
                            <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="h-px w-12 bg-[#2563eb]"></div>
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-3 sm:mb-4 tracking-tight">
                            Event Timeline
                        </h2>
                        <p className="text-xs sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                            Your journey through the MUN conference from registration to closing ceremony
                        </p>
                    </div>
                </div>
                
                {/* Timeline Events */}
                <div className="relative" ref={timelineRef}>
                    {/* Static Background Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 rounded-full opacity-30"></div>
                    
                    {/* Animated Progress Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 w-1 transform -translate-x-1/2 transition-all duration-300 ease-out overflow-hidden" 
                         style={{ height: `${progressHeight}%` }}>
                        <div className="w-full h-full bg-[#2563eb] rounded-full shadow-lg">
                            {/* Animated shimmer effect */}
                            <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                        </div>
                        {/* Glowing dot at the end of progress line */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2563eb] rounded-full shadow-lg shadow-[#2563eb]/50">
                            <div className="absolute inset-0 rounded-full bg-[#2563eb] animate-ping opacity-75"></div>
                            <div className="absolute inset-1 rounded-full bg-white"></div>
                        </div>
                    </div>
                    
                    <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
                    {timelineEvents.map((event, index) => {
                        const isVisible = visibleItems.includes(index)
                        const isLeft = index % 2 === 0
                        
                        return (
                            <div 
                                key={index} 
                                ref={(el) => (itemRefs.current[index] = el)}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Text Content Side */}
                                <div className={`w-full lg:w-1/2 transform transition-all duration-1000 text-center lg:text-left ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative">
                                        {/* Number Badge */}
                                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#2563eb] rounded-full shadow-xl mb-4 sm:mb-6">
                                            <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{index + 1}</span>
                                        </div>
                                        
                                        {/* Date Badge */}
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-md ml-2 sm:ml-4">
                                            <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs sm:text-sm font-semibold text-[#2563eb] uppercase tracking-wider">
                                                {event.date}
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1a365d] mb-3 sm:mb-4 leading-tight">
                                            {event.title}
                                        </h3>
                                        
                                        {/* Decorative Line */}
                                        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#2563eb] mb-4 sm:mb-5 md:mb-6 rounded-full mx-auto lg:mx-0"></div>
                                        
                                        {/* Description */}
                                        <p className="text-xs sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                            {event.description}
                                        </p>
                                        
                                        {/* Icon and Result Button */}
                                        <div className="mt-4 sm:mt-5 md:mt-6 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                                            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2563eb] rounded-full text-white shadow-lg">
                                                {event.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Images Grid Side */}
                                <div className={`w-full lg:w-1/2 transform transition-all duration-1000 ${
                                    isVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : `opacity-0 ${isLeft ? 'translate-x-20' : '-translate-x-20'}`
                                }`}
                                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {event.images.map((image, imgIndex) => (
                                            <div 
                                                key={imgIndex}
                                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-blue-100 to-blue-200"
                                                style={{ 
                                                    transitionDelay: `${index * 100 + 300 + (imgIndex * 100)}ms` 
                                                }}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${event.title} - Image ${imgIndex + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                    priority={index < 2}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>

                {/* End Marker */}
                <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-3 h-3 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-3 h-3 bg-[#2563eb] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventTimeline
