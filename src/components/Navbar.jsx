import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const handleLinkClick = (to, category) => {
        setIsOpen(false);
        setActiveDropdown(null);

        if (to === "achievements") {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                const successSection = projectsSection.querySelector('.achievements-section');
                if (successSection) {
                    setTimeout(() => {
                        successSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
            return;
        }

        if (window.location.pathname === '/ekibimiz' && to !== '/ekibimiz') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(to);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        if (to === "projects") {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }

            if (category) {
                window.dispatchEvent(new CustomEvent('categorySelected', {
                    detail: { category }
                }));

                setTimeout(() => {
                    const projectElement = document.querySelector(`[data-category="${category.toLowerCase()}"]`);
                    if (projectElement) {
                        projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        projectElement.classList.add('highlight-project');
                        setTimeout(() => {
                            projectElement.classList.remove('highlight-project');
                        }, 2000);
                    }
                }, 500);
            }
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { title: "Ana Sayfa", to: "home", isScroll: true },
        { title: "Hakkımızda", to: "about", isScroll: true },
        {
            title: "Kategoriler",
            submenu: [
                {
                    title: "Daily E-Spor Odaları",
                    to: "projects",
                    category: "scrim",
                    description: "Ücretsiz günlük antrenman odaları",
                    icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    ),
                    hoverColor: "hover:text-red-400"
                },
                {
                    title: "Haftalık Turnuvalar",
                    to: "projects",
                    category: "turnuva",
                    description: "Cumartesi özel turnuvalar",
                    icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M9.879 7.519L7.343 4.983a1.6 1.6 0 00-2.121 0l-.222.222a1.6 1.6 0 000 2.121L7.536 9.86m7.072-7.072l2.536 2.536a1.6 1.6 0 010 2.121l-.222.222a1.6 1.6 0 01-2.121 0L12.265 5.13" />
                        </svg>
                    ),
                    hoverColor: "hover:text-green-400"
                },
                {
                    title: "Lig Maçları",
                    to: "projects",
                    category: "lig",
                    description: "Profesyonel lig formatı",
                    icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    ),
                    hoverColor: "hover:text-blue-400"
                },
                {
                    title: "Pro Seriler",
                    to: "projects",
                    category: "pro",
                    description: "Aylık profesyonel turnuvalar",
                    icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    ),
                    hoverColor: "hover:text-yellow-400"
                }
            ]
        },
        { title: "Ekibimiz", to: "/ekibimiz", isScroll: false },
        {
            title: "Başarılarımız",
            to: "achievements",
            isScroll: true
        }
    ];

    const CustomScrollLink = ({ to, children, ...props }) => {
        const isEkibimizPage = window.location.pathname === '/ekibimiz';

        if (isEkibimizPage) {
            return (
                <button
                    onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                            const element = document.getElementById(to);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                    className={props.className}
                >
                    {children}
                </button>
            );
        }

        return (
            <ScrollLink to={to} {...props}>
                {children}
            </ScrollLink>
        );
    };

    return (
        <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-[150]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-gaming-blue font-bold text-xl">BTB AGENCY</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <div
                                    key={item.to || item.title}
                                    className="relative"
                                    ref={item.submenu ? dropdownRef : null}
                                >
                                    {item.submenu ? (
                                        <div className="relative group">
                                            <button
                                                className="text-white hover:text-gaming-blue px-3 py-2 rounded-md cursor-pointer flex items-center transition-colors duration-200"
                                                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                                                onMouseEnter={() => setActiveDropdown(item.title)}
                                            >
                                                {item.title}
                                                <svg className={`w-4 h-4 ml-1 transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {activeDropdown === item.title && (
                                                <div className="relative z-[9999]">
                                                    <div
                                                        className="absolute left-0 mt-2 w-72 bg-dark/90 backdrop-blur-sm border border-gaming-blue/20 rounded-lg shadow-2xl"
                                                        style={{
                                                            height: 'auto',
                                                            minHeight: '340px'
                                                        }}
                                                        onMouseEnter={() => setActiveDropdown(item.title)}
                                                    >
                                                        {item.submenu.map((subItem) => (
                                                            <CustomScrollLink
                                                                key={subItem.to}
                                                                to={subItem.to}
                                                                spy={true}
                                                                smooth={true}
                                                                duration={500}
                                                                offset={-100}
                                                                className={`block px-4 py-4 text-sm text-gray-300 
                                                                    transition-all duration-300 cursor-pointer
                                                                    hover:bg-white/5 ${subItem.hoverColor}
                                                                    mb-4 last:mb-0`}
                                                                onClick={() => handleLinkClick(subItem.to, subItem.category)}
                                                            >
                                                                <div className="flex items-center space-x-5">
                                                                    <span className="text-xl">
                                                                        {subItem.icon}
                                                                    </span>
                                                                    <div>
                                                                        <div className="font-medium">
                                                                            {subItem.title}
                                                                        </div>
                                                                        <div className="text-xs text-gray-400 mt-1">
                                                                            {subItem.description}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </CustomScrollLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        item.isScroll ? (
                                            <CustomScrollLink
                                                to={item.to}
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                                offset={-100}
                                                className={`text-white hover:text-gaming-blue px-3 py-2 rounded-md cursor-pointer transition-colors duration-200`}
                                                onClick={() => handleLinkClick(item.to)}
                                            >
                                                {item.title}
                                            </CustomScrollLink>
                                        ) : (
                                            <RouterLink
                                                to={item.to}
                                                className={`text-white hover:text-gaming-blue px-3 py-2 rounded-md cursor-pointer transition-colors duration-200`}
                                            >
                                                {item.title}
                                            </RouterLink>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-primary"
                        >
                            <span className="sr-only">Ana Menü</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-dark border-t border-gaming-blue/20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.to || item.title}>
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                                            className="w-full text-left text-gray-300 hover:text-primary px-3 py-2 rounded-md"
                                        >
                                            <div className="flex justify-between items-center">
                                                {item.title}
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                        {activeDropdown === item.title && (
                                            <div className="pl-4 space-y-1">
                                                {item.submenu.map((subItem) => (
                                                    <CustomScrollLink
                                                        key={subItem.to}
                                                        to={subItem.to}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}
                                                        offset={-100}
                                                        className="block px-3 py-2 text-sm text-gray-400 hover:text-primary cursor-pointer"
                                                        onClick={() => handleLinkClick(subItem.to, subItem.category)}
                                                    >
                                                        <div>{subItem.title}</div>
                                                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                                    </CustomScrollLink>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    item.isScroll ? (
                                        <CustomScrollLink
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            offset={-100}
                                            className="block text-gray-300 hover:text-primary px-3 py-2 rounded-md cursor-pointer"
                                            onClick={() => handleLinkClick(item.to)}
                                        >
                                            {item.title}
                                        </CustomScrollLink>
                                    ) : (
                                        <RouterLink
                                            to={item.to}
                                            className="block text-gray-300 hover:text-primary px-3 py-2 rounded-md cursor-pointer"
                                        >
                                            {item.title}
                                        </RouterLink>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 