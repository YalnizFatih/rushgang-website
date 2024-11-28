import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectStats {
    players: string;
    prize: string;
    duration: string;
    maps: string[];
    teams?: string;
    matches?: string;
    level?: string;
    community?: string;
}

interface Project {
    id: number;
    title: string;
    date: string;
    shortDesc: string;
    image: string;
    category: string;
    longDesc: string;
    highlights: string[];
    stats: ProjectStats;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const StatCard = ({ title, value }: { title: string; value: string | number }) => (
    <div className="bg-gaming-dark/50 p-4 rounded-lg text-center border border-gaming-blue/20">
        <div className="text-xl font-bold text-gaming-blue">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
    </div>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gaming-dark max-w-4xl w-full rounded-2xl overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header - Resim */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent" />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white hover:text-gaming-blue"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                <span className="text-gaming-blue">{project.date}</span>
                            </div>

                            <p className="text-gray-300 mb-6">{project.longDesc}</p>

                            {/* İstatistikler */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {project.stats.players && (
                                    <StatCard title="Oyuncu" value={project.stats.players} />
                                )}
                                {project.stats.prize && (
                                    <StatCard title="Ödül" value={project.stats.prize} />
                                )}
                                {project.stats.duration && (
                                    <StatCard title="Süre" value={project.stats.duration} />
                                )}
                                {project.stats.maps && (
                                    <StatCard title="Harita" value={project.stats.maps.length} />
                                )}
                                {project.stats.teams && (
                                    <StatCard title="Takım" value={project.stats.teams} />
                                )}
                                {project.stats.matches && (
                                    <StatCard title="Maç" value={project.stats.matches} />
                                )}
                                {project.stats.level && (
                                    <StatCard title="Seviye" value={project.stats.level} />
                                )}
                                {project.stats.community && (
                                    <StatCard title="Topluluk" value={project.stats.community} />
                                )}
                            </div>

                            {/* Öne Çıkanlar */}
                            {project.highlights && (
                                <div className="mt-6">
                                    <h4 className="text-white text-lg font-semibold mb-3">Öne Çıkanlar</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {project.highlights.map((highlight, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-2 text-gray-300"
                                            >
                                                <svg className="w-5 h-5 text-gaming-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal; 