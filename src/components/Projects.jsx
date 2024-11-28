import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
    {
        id: 1,
        title: "BTB Daily Scrims",
        date: "Her Gün",
        shortDesc: "Ücretsiz günlük E-Spor odaları",
        image: "/images/WhatsApp_Görsel_2024-11-27_saat_16_37_28_496d83ed.jpg",
        modalImage: "/images/WhatsAppGörsel2024-11-27saat_16_37_29_a6eca575.jpg",
        category: "scrim",
        longDesc: "Her gün 20:00-23:00 arası 4 E-Spor odası. Klasik Scrim Haritaları. Tamamen ücretsiz katılım!",
        highlights: [
            "Tamamen Ücretsiz",
            "4 E-Spor Odaları",
            "4 Klasik Maç",
            "Günlük Katılım"
        ],
        stats: {
            players: "80",
            prize: "Ücretsiz",
            duration: "3 Saat",
            matches: "4 Maç",
            maps: ["Erangel", "Miramar", "Sanhok", "Erangel"]
        }
    },
    {
        id: 2,
        title: "BTB Friday Cup",
        date: "Her Cuma",
        shortDesc: "Hafta sonu Turnuvası",
        image: "/images/WhatsApp_Görsel_2024-11-27_saat_16_37_28_496d83ed.jpg",
        modalImage: "/images/WhatsAppGörsel2024-11-27saat_16_37_29_a6eca575.jpg",
        category: "turnuva",
        longDesc: "Cuma günü 6 maçlık E-spor serisi. Klasik Scrim Haritaları.",
        highlights: [
            "6 Maçlık Seri",
            "4 Harita Rotasyon",
            "E-Spor Formatı",
            "Özel Format"
        ],
        stats: {
            players: "75",
            prize: "50₺/Takım",
            duration: "4 Saat",
            matches: "6 Maç",
            maps: ["Erangel", "Miramar", "Erangel", "Sanhok"]
        }
    },
    {
        id: 3,
        title: "BTB Scrim League",
        date: "Cumartesi ve Pazar",
        shortDesc: "Event League",
        image: "/images/WhatsApp_Görsel_2024-11-27_saat_16_37_28_496d83ed.jpg",
        modalImage: "/images/WhatsAppGörsel2024-11-27saat_16_37_29_a6eca575.jpg",
        category: "lig",
        longDesc: "Cumartesi ve Pazar günleri düzenlenen Event League. 4 özel odada, rekabetçi formatta gerçekleşen hafta sonu ligi. Klasik haritalarında rotasyonlu sistem.",
        highlights: [
            "20 Takımlı Format",
            "8 E-Spor Odaları",
            "4 Harita Rotasyon",
            "Hafta Sonu Format"
        ],
        stats: {
            players: "75",
            prize: "75₺/Takım",
            duration: "2 Gün",
            matches: "8 Maç",
            maps: ["Erangel", "Miramar", "Erangel", "Sanhok",]
        }
    },
    {
        id: 4,
        title: "BTB Pro Series",
        date: "Aylık",
        shortDesc: "Profesyonel Turnuva Serisi",
        image: "/images/WhatsApp_Görsel_2024-11-27_saat_16_37_28_496d83ed.jpg",
        modalImage: "/images/WhatsAppGörsel2024-11-27saat_16_37_29_a6eca575.jpg",
        category: "pro",
        longDesc: "Ayda bir düzenlenen 2 günlük profesyonel E-spor turnuvası. Her gün 6 maç. Tüm haritalarda rotasyon. Seçkin takımlar!",
        highlights: [
            "12 Pro Maç",
            "E-Spor Formatı",
            "4 Harita Rotasyon",
            "Seçkin Takımlar"
        ],
        stats: {
            players: "70",
            prize: "100₺/Takım",
            duration: "2 Gün",
            matches: "12 Maç",
            maps: ["Erangel", "Miramar", "Sanhok", "Erangel"]
        }
    }
];

const ProjectCard = ({ project, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Kategoriye göre efekt belirleme
    const getCategoryEffect = (category, isHovered) => {
        if (!isHovered) return '';

        switch (category.toLowerCase()) {
            case 'scrim':
                return 'shadow-[0_0_30px_rgba(239,68,68,0.3)] scale-105 bg-red-500/10 border-red-500/30';
            case 'turnuva':
                return 'shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-105 bg-green-500/10 border-green-500/30';
            case 'lig':
                return 'shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-105 bg-blue-500/10 border-blue-500/30';
            case 'pro':
                return 'shadow-[0_0_30px_rgba(234,179,8,0.3)] scale-105 bg-yellow-500/10 border-yellow-500/30';
            default:
                return '';
        }
    };

    // Kategori badge'i için stil
    const getCategoryBadge = (category) => {
        switch (category.toLowerCase()) {
            case 'scrim':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'turnuva':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'lig':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'pro':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            default:
                return '';
        }
    };

    return (
        <div
            className={`relative h-[350px] sm:h-[400px] lg:h-[430px] overflow-hidden cursor-pointer 
                      backdrop-blur-sm bg-white/5 
                      border border-white/10
                      transition-all duration-500 ease-out
                      p-1 rounded-xl
                      ${getCategoryEffect(project.category, isHovered)}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(project)}
        >
            {/* Kategori Badge'i - Sağ üst köşeye ekle */}
            <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border 
                               backdrop-blur-sm transition-all duration-300
                               ${getCategoryBadge(project.category)}`}>
                    {project.category.toUpperCase()}
                </span>
            </div>

            {/* Arka plan görseli */}
            <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500
                              ${isHovered ? 'brightness-110' : ''}`}
                    onError={(e) => {
                        console.error("Resim yüklenemedi:", e);
                        e.target.src = "/images/fallback.jpg";
                    }}
                />
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t rounded-lg"
                initial={{ opacity: 0 }}
                animate={{
                    background: `linear-gradient(180deg, 
                        rgba(0,0,0,${isHovered ? '0.6' : '0.7'}) 0%, 
                        rgba(0,0,0,${isHovered ? '0.4' : '0.5'}) 50%, 
                        rgba(0,0,0,${isHovered ? '0.8' : '0.9'}) 100%)`,
                    opacity: isHovered ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
            />

            {/* İçerik */}
            <motion.div
                className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 flex flex-col"
            >
                {/* Tarih */}
                <div className="flex justify-end items-center mb-3">
                    <span className={`text-sm ${getCategoryBadge(project.category)}`}>
                        {project.date}
                    </span>
                </div>

                {/* Başlık */}
                <motion.h3
                    className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300
                              ${getCategoryBadge(project.category)}`}
                >
                    {project.title}
                </motion.h3>

                {/* Açıklama */}
                <p className="text-gray-300 text-sm mb-4">
                    {project.shortDesc}
                </p>

                {/* İstatistikler - Hover durumunda görünür */}
                <motion.div
                    className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                    }}
                >
                    <div className="bg-gaming-dark/50 backdrop-blur-sm p-2 rounded-lg border border-gaming-blue/20">
                        <div className="text-gaming-blue text-lg font-bold">{project.stats.players}</div>
                        <div className="text-gray-400 text-xs">Oyuncu</div>
                    </div>
                    <div className="bg-gaming-dark/50 backdrop-blur-sm p-2 rounded-lg border border-gaming-blue/20">
                        <div className="text-gaming-blue text-lg font-bold">{project.stats.prize}</div>
                        <div className="text-gray-400 text-xs">Ödül</div>
                    </div>
                </motion.div>

                {/* Detay Butonu - Daha yumuşak ve şeffaf hover efekti */}
                <div className="mt-auto">
                    <button
                        className="w-full py-2.5 px-4 rounded-lg 
                                 bg-black/20 backdrop-blur-sm
                                 hover:bg-white/5 
                                 text-gray-400
                                 hover:text-gray-200
                                 transition-all duration-300
                                 flex items-center justify-center gap-2
                                 border border-white/5
                                 hover:border-white/10"
                    >
                        <span className="font-medium">Detayları Gör</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Event listener ekle
    useEffect(() => {
        const handleOpenModal = (event) => {
            const project = event.detail.project;
            setSelectedProject(project);
            setIsModalOpen(true);
        };

        window.addEventListener('openProjectModal', handleOpenModal);

        return () => {
            window.removeEventListener('openProjectModal', handleOpenModal);
        };
    }, []);

    useEffect(() => {
        const handleCategorySelect = (event) => {
            setSelectedCategory(event.detail.category);
            // 3 saniye sonra seçimi kaldır
            setTimeout(() => setSelectedCategory(null), 3000);
        };

        window.addEventListener('categorySelected', handleCategorySelect);
        return () => window.removeEventListener('categorySelected', handleCategorySelect);
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Kategori renklerini belirle
    const getCategoryHighlight = (category) => {
        switch (category.toLowerCase()) {
            case 'scrim':
                return 'ring-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]';
            case 'turnuva':
                return 'ring-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]';
            case 'lig':
                return 'ring-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]';
            case 'pro':
                return 'ring-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]';
            default:
                return 'ring-gaming-blue';
        }
    };

    return (
        <div id="projects" className="relative z-0 py-8 sm:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Projeler Başlığı */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Projelerimiz & Başarılarımız
                    </h2>
                    <div className="w-20 h-1 bg-gaming-blue mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Organize ettiğimiz turnuvalar ve elde ettiğimiz başarılar
                    </p>
                </motion.div>

                {/* Projeler Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`p-2 rounded-xl transition-all duration-500
                                      ${selectedCategory === project.category ?
                                    `ring-4 ring-offset-4 ring-offset-black ${getCategoryHighlight(project.category)}` :
                                    ''}`}
                            animate={{
                                scale: selectedCategory === project.category ? 1.03 : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                        >
                            <ProjectCard project={project} onClick={handleProjectClick} />
                        </motion.div>
                    ))}
                </div>

                {/* Başarılar Bölümü */}
                <motion.div className="mt-12 sm:mt-20 mb-16 sm:mb-32 bg-black/20 rounded-xl p-4 sm:p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Başarılarımız
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-black/30 p-6 rounded-lg border border-gaming-blue/20 hover:border-gaming-blue/40 transition-all
                                      backdrop-blur-sm hover:bg-black/40">
                            <div className="text-[#00ff9d] text-2xl font-bold mb-2">1000+ Üye</div>
                            <div className="text-gray-300 text-sm mb-4">Discord topluluğumuzda aktif üye sayısı</div>
                            <div className="text-sm text-gray-500">2023 - 2024</div>
                        </div>

                        <div className="bg-black/30 p-6 rounded-lg border border-gaming-blue/20 hover:border-gaming-blue/40 transition-all
                                      backdrop-blur-sm hover:bg-black/40">
                            <div className="text-[#00ff9d] text-2xl font-bold mb-2">50+ Etkinlik</div>
                            <div className="text-gray-300 text-sm mb-4">Başarıyla tamamlanan organizasyon</div>
                            <div className="text-sm text-gray-500">Son 6 Ay</div>
                        </div>

                        <div className="bg-black/30 p-6 rounded-lg border border-gaming-blue/20 hover:border-gaming-blue/40 transition-all
                                      backdrop-blur-sm hover:bg-black/40">
                            <div className="text-[#00ff9d] text-2xl font-bold mb-2">7/24 Destek</div>
                            <div className="text-gray-300 text-sm mb-4">Kesintisiz topluluk desteği</div>
                            <div className="text-sm text-gray-500">Her Zaman</div>
                        </div>
                    </div>
                </motion.div>

                {/* Boş Alan - Footer için */}
                <div className="text-center py-16">
                </div>

                {/* Modal */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default Projects; 