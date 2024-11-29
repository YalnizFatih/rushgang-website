import React from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project || !isOpen) return null;

    // Kategori bazlı renk şeması
    const getCategoryColors = (category) => {
        switch (category.toLowerCase()) {
            case 'scrim':
                return {
                    accent: '#cc3644',          // Daha koyu kırmızı
                    text: '#a83640',            // Daha da koyu kırmızı
                    bg: '#151212',              // Çok koyu arka plan
                    card: '#1d1616'             // Biraz daha açık kart arkaplanı
                };
            case 'turnuva':
                return {
                    accent: '#009959',          // Daha koyu yeşil
                    text: '#007a47',            // Daha da koyu yeşil
                    bg: '#121513',              // Çok koyu arka plan
                    card: '#161d18'             // Biraz daha açık kart arkaplanı
                };
            case 'lig':
                return {
                    accent: '#2563eb',          // Daha koyu mavi
                    text: '#1d4ed8',            // Daha da koyu mavi
                    bg: '#121315',              // Çok koyu arka plan
                    card: '#16181d'             // Biraz daha açık kart arkaplanı
                };
            case 'pro':
                return {
                    accent: '#b99006',          // Daha koyu sarı
                    text: '#946e05',            // Daha da koyu sarı
                    bg: '#151412',              // Çok koyu arka plan
                    card: '#1d1b16'             // Biraz daha açık kart arkaplanı
                };
            default:
                return {
                    accent: '#cc5454',
                    text: '#a84444',
                    bg: '#151515',
                    card: '#1d1d1d'
                };
        }
    };

    const colors = getCategoryColors(project.category);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className={`relative rounded-xl w-full border border-opacity-5
                    max-w-[520px]                    /* PC için max genişlik */
                    sm:max-w-[520px]                 /* Tablet için aynı */
                    max-w-[92%]                      /* Mobil için genişlik */
                    max-h-[75vh]                     /* Mobil için daha kısa */
                    sm:max-h-[85vh]                  /* PC için normal */
                    mx-auto                          
                    overflow-y-auto`}
                    style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.accent,
                        boxShadow: `0 0 10px ${colors.accent}08`
                    }}>
                    <div className="relative overflow-hidden rounded-t-xl
                        h-[180px]                    /* Mobil için daha kısa */
                        sm:h-[220px]                 /* PC için normal */
                        ">
                        <img
                            src={project.modalImage || project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="font-bold text-white mb-2
                                text-base                /* Mobil için küçük */
                                sm:text-xl               /* Tablet ve üstü için normal */
                                ">
                                {project.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                                <div className="w-0.5 h-4" style={{ backgroundColor: colors.accent }} />
                                <span className="font-medium text-sm" style={{ color: colors.text }}>
                                    {project.category.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-2 sm:space-y-3
                        p-3 sm:p-4                   /* Mobil için daha az padding */
                    ">
                        <div className="flex items-center justify-between text-sm">
                            <p className="text-gray-300">{project.shortDesc}</p>
                            <span style={{ color: colors.accent }}>{project.date}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {[
                                { label: 'Oyuncu', value: project.stats.players },
                                { label: 'Ödül', value: project.stats.prize },
                                { label: 'Süre', value: project.stats.duration },
                                { label: 'Maç', value: project.stats.matches }
                            ].map((stat, index) => (
                                <div key={index}
                                    className="p-3 rounded-lg text-center transition-all duration-300 hover:scale-[1.01]"
                                    style={{
                                        backgroundColor: colors.card,
                                        boxShadow: `0 0 8px ${colors.accent}08`
                                    }}>
                                    <div className="text-base font-bold opacity-90"
                                        style={{ color: colors.accent }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ color: colors.text }}
                                        className="text-xs opacity-75">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2"
                                    style={{ color: colors.accent }}>
                                    Savaş Bölgeleri
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stats.maps.map((map, index) => (
                                        <span key={index}
                                            className="px-2 py-1 rounded
                                                text-[10px]              /* Mobil için daha küçük */
                                                sm:text-xs               /* Tablet ve üstü için normal */
                                                ">
                                            {map}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3"
                                    style={{ color: colors.accent }}>
                                    Detaylar
                                </h4>
                                <div style={{ backgroundColor: colors.card }}
                                    className="p-6 rounded-lg transition-all duration-300">
                                    <p style={{ color: colors.text }} className="leading-relaxed">
                                        {project.longDesc}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3"
                                    style={{ color: colors.accent }}>
                                    Öne Çıkanlar
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {project.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: colors.accent }} />
                                            <span style={{ color: colors.text }}>{highlight}</span>
                                        </div>
                                    ))}
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