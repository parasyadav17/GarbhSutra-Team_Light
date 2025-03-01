import React from 'react';

const ResourcesPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner with Baby Image */}
            <div className="relative">
                <div className="bg-gradient-to-r from-white to-transparent absolute inset-0 z-10"></div>
                <div className="container mx-auto px-4 py-16 relative z-20">
                    <h1 className="text-5xl font-bold text-slate-700 mb-4">Resources</h1>
                    <div className="w-24 h-1 bg-coral-400 mb-8"></div>
                </div>
                <img
                    src="/api/placeholder/800/400"
                    alt="Baby in yellow outfit"
                    className="absolute top-0 right-0 h-full w-1/2 object-cover object-left"
                />
            </div>

            {/* Resources Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Resource Cards */}
                    {resourceItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-gray-200">
                                <img
                                    src={`/api/placeholder/400/300`}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-slate-700 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="inline-block px-4 py-2 bg-coral-400 text-white rounded hover:bg-coral-500 transition-colors duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-700 mb-6">Upcoming Events</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-7 gap-2 text-center mb-4">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                <div key={i} className="font-semibold text-gray-600">{day}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center">
                            {[...Array(31)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`p-2 rounded-full ${[7, 14, 15, 22].includes(i + 1)
                                        ? 'bg-blue-100 text-blue-600'
                                        : [5, 6, 13].includes(i + 1)
                                            ? 'bg-coral-100 text-coral-600'
                                            : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Button (Fixed Position) */}
            <div className="fixed bottom-6 right-6">
                <button className="flex items-center bg-coral-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-coral-500 transition-colors duration-300">
                    <span className="mr-2">Chat now</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// Sample resource items
const resourceItems = [
    {
        title: "Pregnancy Guide",
        description: "Essential information for expecting mothers throughout their pregnancy journey.",
        link: "/pregnancy-guide"
    },
    {
        title: "Newborn Care",
        description: "Tips and guidance for caring for your newborn baby in the first few months.",
        link: "/newborn-care"
    },
    {
        title: "Nutrition & Wellness",
        description: "Healthy eating and wellness advice for pregnancy and postpartum recovery.",
        link: "/nutrition"
    },
    {
        title: "Support Groups",
        description: "Connect with other parents and find emotional support during your journey.",
        link: "/support-groups"
    },
    {
        title: "Educational Videos",
        description: "Watch informative videos about pregnancy, childbirth, and infant care.",
        link: "/videos"
    },
    {
        title: "FAQ",
        description: "Answers to commonly asked questions about pregnancy and parenting.",
        link: "/faq"
    }
];

export default ResourcesPage;