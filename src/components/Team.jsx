import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
    {
        id: 1,
        name: "BTB Fatih",
        role: "Developer & Kaptan",
        image: "/images/team/fatih.jpg",
        pubgId: "5287426012",
        discord: "BTB Fatih#1111",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbfatih",
            tiktok: "https://tiktok.com/@btbfatih"
        },
        description: "5 yıllık PUBG Mobile tecrübesiyle takımın kaptanı. RushGang'in web geliştirmesini yapan, aynı zamanda aktif scrim oyuncusu. 🎯⭐",
        isSpecial: true
    },
    {
        id: 2,
        name: "BTB Efe",
        role: "Scrim Oyuncusu",
        image: "/images/team/efe.jpg",
        pubgId: "5123456789",
        discord: "BTB Efe#2222",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbefe",
            tiktok: "https://tiktok.com/@btbefe"
        },
        description: "İlk günden beri yanımda olan can dostum. Beraber başladık, beraber devam ediyoruz. 🤝⭐",
        isSpecial: true
    },
    {
        id: 3,
        name: "BTB Mustafa",
        role: "Menejer",
        image: "/images/team/mustafa.jpg",
        pubgId: "5987654321",
        discord: "BTB Mustafa#3333",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbmustafa",
            tiktok: "https://tiktok.com/@btbmustafa"
        },
        description: "RushGang'in menejerlik görevini üstlenen, turnuva ve organizasyonları yöneten üyemiz.",
    },
    {
        id: 4,
        name: "BTB Yusuf",
        role: "Scrim Oyuncusu",
        image: "/images/team/yusuf.jpg",
        pubgId: "5789012345",
        discord: "BTB Yusuf#4444",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbyusuf",
            tiktok: "https://tiktok.com/@btbyusuf"
        },
        description: "Scrim odalarının deneyimli oyuncusu. Klasik maç ve turnuva katılımcısı."
    },
    {
        id: 5,
        name: "BTB Tuğra",
        role: "Scrim Oyuncusu",
        image: "/images/team/tugra.jpg",
        pubgId: "5345678901",
        discord: "BTB Tuğra#5555",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbtugra",
            tiktok: "https://tiktok.com/@btbtugra"
        },
        description: "Scrim odalarının deneyimli oyuncusu. Klasik maç ve turnuva katılımcısı."
    },
    {
        id: 6,
        name: "BTB Furkan",
        role: "Menejer",
        image: "/images/team/furkan.jpg",
        pubgId: "5234567890",
        discord: "BTB Furkan#6666",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://instagram.com/btbfurkan",
            tiktok: "https://tiktok.com/@btbfurkan"
        },
        description: "Arada bir uğrayıp scrimler ve turnuvalar hakkında sohbet eden, takıma destek olan sevgili Abimiz. 😄⭐",
        isSpecial: true
    }
];

const PlayerModal = ({ member, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.75, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.75, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    <div className="bg-gaming-dark/95 rounded-2xl max-w-2xl w-full border border-gaming-blue/20 shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-gaming-dark/50 to-transparent" />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white">{member.name}</h3>
                                <span className={`inline-block px-3 py-1 ${member.id === 1
                                    ? 'bg-gradient-to-r from-zinc-900/80 to-stone-800/80 text-red-500 border border-red-800/50 font-bold'
                                    : member.isSpecial
                                        ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/20'
                                        : 'bg-[#FF4655]/20 text-[#FF4655]'
                                    } rounded-full text-sm`}>
                                    {member.role}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold text-gaming-blue">Oyuncu Bilgileri</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="text-sm text-gray-400">PUBG ID</div>
                                            <div className="text-white">{member.pubgId}</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="text-sm text-gray-400">Discord</div>
                                            <div className="text-white">{member.discord}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold text-gaming-blue">Hakkında</h4>
                                    <p className="text-gray-300">{member.description}</p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold text-gaming-blue">Sosyal Medya</h4>
                                    <div className="flex space-x-4">
                                        {Object.entries(member.social).map(([platform, url]) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-gaming-blue transition-colors p-2"
                                            >
                                                {/* Mevcut sosyal medya ikonları */}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
);

const TeamMemberCard = ({ member, index, onOpenModal }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
        }}
        whileHover={{
            y: -8,
            transition: {
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            }
        }}
        onClick={() => onOpenModal(member)}
        className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#FF4655]/20 hover:border-[#FF4655]/40 transition-all duration-300 group shadow-xl will-change-transform cursor-pointer"
    >
        {/* Profil Resmi Bölümü */}
        <div className="relative h-[300px] overflow-hidden">
            <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transform-gpu"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                    scale: 1.03,
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    }
                }}
            />
            {/* Gradientler */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* İsim ve Rol */}
            <motion.div
                className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1 text-shadow-lg">{member.name}</h3>
                    <div className="flex items-center">
                        <span className={`inline-block px-3 py-1 ${member.id === 1
                            ? 'bg-gradient-to-r from-zinc-900/80 to-stone-800/80 text-red-500 border border-red-800/50 font-bold shadow-lg shadow-red-900/20'
                            : member.isSpecial
                                ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/20'
                                : 'bg-[#FF4655]/20 text-[#FF4655]'
                            } rounded-full text-sm font-semibold transform-gpu`}>
                            {member.role}
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* ID'ler */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="flex items-center space-x-2 text-sm mb-2"
                    whileHover={{
                        x: 5,
                        transition: {
                            duration: 0.2,
                            ease: "easeOut"
                        }
                    }}
                >
                    <span className="text-[#FF4655] font-semibold">PUBG ID:</span>
                    <span className="text-gray-200">{member.pubgId}</span>
                </motion.div>
                <motion.div
                    className="flex items-center space-x-2 text-sm"
                    whileHover={{
                        x: 5,
                        transition: {
                            duration: 0.2,
                            ease: "easeOut"
                        }
                    }}
                >
                    <span className="text-[#FF4655] font-semibold">Discord:</span>
                    <span className="text-gray-200">{member.discord}</span>
                </motion.div>
            </motion.div>
        </div>

        {/* Alt Bölüm */}
        <motion.div
            className="p-4 space-y-4 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <p className={`text-gray-300 text-sm leading-relaxed ${member.id === 1
                ? 'text-red-400'
                : member.isSpecial
                    ? 'text-yellow-300'
                    : ''
                }`}>
                {member.description}
            </p>

            {/* Sosyal Medya */}
            <div className="flex space-x-3 pt-2">
                {Object.entries(member.social).map(([platform, url]) => (
                    <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF4655] transition-colors p-2 bg-black/20 rounded-lg transform-gpu"
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: {
                                duration: 0.1
                            }
                        }}
                    >
                        {platform === 'discord' && (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                            </svg>
                        )}
                        {platform === 'instagram' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        )}
                        {platform === 'youtube' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        )}
                        {platform === 'tiktok' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        )}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    </motion.div>
);

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleOpenModal = (member) => {
        setSelectedMember(member);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
    };

    return (
        <div className="relative z-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Ekibimiz
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gaming-blue mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.p
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        RushGang'in deneyimli oyuncu kadrosu
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={member.id}
                            member={member}
                            index={index}
                            onOpenModal={handleOpenModal}
                        />
                    ))}
                </div>
            </div>

            <PlayerModal
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Team; 