'use client'
import React, { useState } from 'react'

const agendas = [
    {
        committee: 'UNSC',
        title: 'Peace & Security',
        agenda: 'International Peace and Security, Disarmament, and Conflict Prevention',
        details: 'Addressing global conflicts, peacekeeping operations, arms control initiatives, and strategies for preventing escalation of international tensions and promoting diplomatic solutions.'
    },
    {
        committee: 'UNEP',
        title: 'Climate Action',
        agenda: 'Climate Change, Environmental Sustainability, and Sustainable Development',
        details: 'Tackling climate change through mitigation strategies, promoting environmental conservation, and implementing sustainable development goals for a greener future.'
    },
    {
        committee: 'ECOFIN',
        title: 'Economic Stability',
        agenda: 'Global Economic Stability, International Finance, and Development Cooperation',
        details: 'Ensuring global financial stability, promoting international trade, fostering development cooperation, and addressing economic disparities among nations.'
    },
    {
        committee: 'CSTD',
        title: 'Emerging Tech',
        agenda: 'Governance of Emerging Technologies, Artificial Intelligence, Cybersecurity, and Innovation',
        details: 'Developing frameworks for responsible AI governance, strengthening cybersecurity measures, promoting technological innovation, and addressing digital divide challenges.'
    },
    {
        committee: 'UNHRC',
        title: 'Human Rights',
        agenda: 'Human Rights Protection, Humanitarian Affairs, Rule of Law, and Democratic Governance',
        details: 'Protecting fundamental human rights, addressing humanitarian crises, strengthening rule of law, and promoting democratic governance worldwide.'
    },
    {
        committee: 'WHO',
        title: 'Global Health',
        agenda: 'Global Health Systems, Pandemic Preparedness, and Health Security',
        details: 'Strengthening global health infrastructure, enhancing pandemic response mechanisms, ensuring health security, and promoting universal healthcare access.'
    },
    {
        committee: 'FAO',
        title: 'Food Security',
        agenda: 'Food Security, Agricultural Sustainability, and Population Dynamics',
        details: 'Addressing food security challenges, promoting sustainable agricultural practices, and managing population dynamics to ensure adequate nutrition for all.'
    },
    {
        committee: 'UNESCO',
        title: 'Education & Youth',
        agenda: 'Education Policy, Youth Development, and the Rights of Future Generations',
        details: 'Advancing quality education access, empowering youth through development programs, and safeguarding the rights and opportunities of future generations.'
    }
]

const AgendaDiscussion = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section id="agenda" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
                        AGENDA FOR DISCUSSION
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="h-px w-12 bg-[#2563eb]"></div>
                        <svg className="w-5 h-5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                        </svg>
                        <div className="h-px w-12 bg-[#2563eb]"></div>
                    </div>
                    <p className="text-xs sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Explore the key topics and agendas that will be discussed across various committees
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
                    {agendas.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-[#f0f7ff] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#2563eb] rounded-lg shadow-md flex-shrink-0">
                                        <span className="text-white font-bold text-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-bold text-[#1a365d] text-sm sm:text-base md:text-lg">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <svg 
                                    className={`w-6 h-6 text-[#2563eb] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-6 pb-5 border-t border-gray-200">
                                    <div className="pt-5 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <div>
                                                <p className="text-[#2563eb] font-semibold mb-2">
                                                    {item.agenda}
                                                </p>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AgendaDiscussion
