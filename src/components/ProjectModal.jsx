import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Ana Overlay - Arkaplan Blur Efekti */}
            <div className="fixed inset-0 bg-black/90 backdrop-blur-lg" onClick={onClose} />

            {/* Modal Container - Ortalama ve Konumlandırma */}
            <div className="relative min-h-screen flex items-center justify-center p-6">
                {/* Modal Ana Çerçeve */}
                <div className="relative bg-black/80 backdrop-blur-md w-full max-w-4xl rounded-xl overflow-hidden
                              border border-white/10 shadow-2xl">
                    {/* Flex Container - Yan Yana Düzen */}
                    <div className="flex flex-col md:flex-row h-[500px]">
                        {/* Sol Bölüm - Görsel Alanı */}
                        <div className="relative w-full md:w-2/5 h-full">
                            <img
                                src={project.modalImage || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Kategori Badge - Üst Sol Köşe */}
                            <div className="absolute top-4 left-4">
                                <span className="text-sm font-medium px-3 py-1.5 rounded-full
                                               bg-black/40 backdrop-blur-sm text-white border border-white/10">
                                    {project.category.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {/* Sağ Bölüm - İçerik Alanı */}
                        <div className="relative flex-1 p-6 overflow-y-auto bg-black/40">
                            {/* Kapatma Butonu - Üst Sağ Köşe */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-gray-500 hover:text-white
                                         bg-black/30 p-1.5 rounded-lg transition-all duration-300
                                         hover:bg-black/50"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* İçerik Wrapper */}
                            <div className="space-y-6">
                                {/* Başlık ve Açıklama Grubu */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-400">{project.shortDesc}</span>
                                        <span className="text-xs text-gaming-blue">{project.date}</span>
                                    </div>
                                </div>

                                {/* İstatistikler Grid */}
                                <div className="grid grid-cols-4 gap-2">
                                    {[
                                        { label: 'Oyuncu', value: project.stats.players },
                                        { label: 'Ödül', value: project.stats.prize },
                                        { label: 'Süre', value: project.stats.duration },
                                        { label: 'Maç', value: project.stats.matches }
                                    ].map((stat, index) => (
                                        <div key={index} className="bg-black/20 p-2 rounded-lg text-center">
                                            <div className="text-gaming-blue text-sm font-bold">{stat.value}</div>
                                            <div className="text-gray-500 text-xs">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Haritalar Bölümü */}
                                <div>
                                    <div className="text-xs font-medium text-gray-500 mb-2">SAVAŞ BÖLGELERİ</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.stats.maps.map((map, index) => (
                                            <span key={index}
                                                className="px-2 py-0.5 bg-gaming-blue/5 rounded-md
                                                         text-gaming-blue text-xs">
                                                {map}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Detaylı Açıklama - Daha şık ve sade */}
                                <div className="mt-6">
                                    <div className="text-gray-300 text-base leading-relaxed 
                                          bg-black/20 backdrop-blur-sm p-5 rounded-lg
                                          hover:bg-black/30 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs font-medium text-gaming-blue uppercase tracking-wider">
                                                Detaylar
                                            </span>
                                            <div className="flex-1 h-[1px] bg-gaming-blue/20"></div>
                                        </div>
                                        {project.longDesc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 