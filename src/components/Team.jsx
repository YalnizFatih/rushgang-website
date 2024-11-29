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
        image: "/images/WhatsAppGörsel2024-11-28aat21.59.14_23234b4e.jpg",
        pubgId: "5324865613",
        discord: "BTB Yusuf#4444",
        social: {
            discord: "https://discord.gg/btbagency",
            instagram: "https://www.instagram.com/yusufdsszz?igsh=Y3BtcnpvaDUzeHR2&utm_source=qr",
            tiktok: "https://www.tiktok.com/@606snoxy?_t=8rmUwWu5wLy&_r=1"
        },
        description: "Scrim odalarının deneyimli oyuncusu. Klasik maç ve turnuva katılımcısı."
    },
    {
        id: 5,
        name: "RG Nessy99",
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

const SocialIcon = ({ platform }) => {
    switch (platform) {
        case 'discord':
            return (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            );
        default:
            return null;
    }
};

const getRoleTheme = (role) => {
    switch (role.toLowerCase()) {
        case 'developer & kaptan':
            return {
                text: '#ff4655',
                bg: 'bg-[#1a1616]',
                border: 'border-[#ff4655]/30',
                accent: 'from-[#ff4655]/20 to-transparent',
                pattern: "url('/patterns/tactical-red.png')"
            };
        case 'menejer':
            return {
                text: '#00ff9d',
                bg: 'bg-[#161a17]',
                border: 'border-[#00ff9d]/30',
                accent: 'from-[#00ff9d]/20 to-transparent',
                pattern: "url('/patterns/tactical-green.png')"
            };
        case 'scrim oyuncusu':
            return {
                text: '#3b82f6',
                bg: 'bg-[#161a1f]',
                border: 'border-[#3b82f6]/30',
                accent: 'from-[#3b82f6]/20 to-transparent',
                pattern: "url('/patterns/tactical-blue.png')"
            };
        default:
            return {
                text: '#ffd700',
                bg: 'bg-[#1a1914]',
                border: 'border-[#ffd700]/30',
                accent: 'from-[#ffd700]/20 to-transparent',
                pattern: "url('/patterns/tactical-gold.png')"
            };
    }
};

const PlayerModal = ({ member, isOpen, onClose }) => {
    const roleTheme = member ? getRoleTheme(member.role) : null;

    return (
        <AnimatePresence>
            {isOpen && member && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 z-[60] cursor-pointer"
                        style={{
                            backgroundImage: roleTheme?.pattern,
                            backgroundBlendMode: 'soft-light',
                            backgroundSize: '100px'
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.75, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.75, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4"
                        onClick={onClose}
                    >
                        <div
                            className={`relative overflow-hidden
                                w-full mx-auto
                                max-h-[85vh] sm:max-h-[85vh]
                                max-w-[85%] sm:max-w-[530px]
                                ${roleTheme?.bg || 'bg-black'}
                                rounded-[20px] sm:rounded-[24px]
                                border ${roleTheme?.border}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Taktiksel Desenler */}
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: roleTheme?.pattern,
                                    backgroundSize: '50px'
                                }}
                            />

                            {/* Köşe Süsleri - Ünvana göre renk */}
                            <div className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 ${roleTheme?.border} rounded-tl-[20px]`} />
                            <div className={`absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 ${roleTheme?.border} rounded-tr-[20px]`} />
                            <div className={`absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 ${roleTheme?.border} rounded-bl-[20px]`} />
                            <div className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 ${roleTheme?.border} rounded-br-[20px]`} />

                            {/* Resim Bölümü */}
                            <div className="relative h-[200px] sm:h-[320px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-[center_25%] brightness-90"
                                />

                                {/* Gradient Overlay - Ünvana göre renk */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${roleTheme?.accent}`} />
                                <div className={`absolute inset-0 bg-gradient-to-t from-${roleTheme?.bg} to-transparent`} />

                                {/* İsim ve Rol */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 
                                                 tracking-wide text-shadow-lg">
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-1 h-4"
                                            style={{ backgroundColor: roleTheme?.text || '#FF4655' }} />
                                        <span className="font-medium text-sm sm:text-base"
                                            style={{ color: roleTheme?.text || '#FF4655' }}>
                                            {member.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Kapatma Butonu */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-20
                                        p-2 sm:p-2.5 rounded-full 
                                        bg-[#FF4655]/10
                                        backdrop-blur-sm"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* İçerik Bölümü */}
                            <div className="relative z-10 p-4 sm:p-6 space-y-4">
                                {/* Oyuncu Bilgileri */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className={`p-3 rounded-lg bg-black/20 border ${roleTheme?.border}`}>
                                        <div className="text-[10px] sm:text-xs text-[#FF4655]/80 uppercase mb-1">PUBG ID</div>
                                        <div className="text-white font-medium tracking-wide text-sm sm:text-base">{member.pubgId}</div>
                                    </div>
                                    <div className={`p-3 rounded-lg bg-black/20 border ${roleTheme?.border}`}>
                                        <div className="text-[10px] sm:text-xs text-[#FF4655]/80 uppercase mb-1">Discord</div>
                                        <div className="text-white font-medium tracking-wide text-sm sm:text-base">{member.discord}</div>
                                    </div>
                                </div>

                                {/* Sosyal Medya */}
                                <div className="flex space-x-3">
                                    {Object.entries(member.social).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 rounded-lg bg-black/20 border ${roleTheme?.border}
                                                    text-white/80 transition-colors duration-300`}
                                        >
                                            <SocialIcon platform={platform} />
                                        </a>
                                    ))}
                                </div>

                                {/* Hakkında */}
                                <div className="bg-black/40 p-4 sm:p-5 rounded-xl
                                              backdrop-blur-sm border border-[#FF4655]/10">
                                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const TeamMemberCard = ({ member, index, onOpenModal }) => {
    const roleTheme = getRoleTheme(member.role);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            onClick={() => onOpenModal(member)}
            className={`bg-black/40 overflow-hidden cursor-pointer
                      w-[98%] sm:w-[95%] lg:w-full mx-auto
                      border-[1px] ${roleTheme.border}
                      rounded-[20px] sm:rounded-[24px]
                      transition-all duration-300`}
        >
            {/* Resim Container */}
            <div className="relative h-[280px] sm:h-[280px] lg:h-[300px] overflow-hidden">
                {/* Üst Köşe Süsleri */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#FF4655]/30 rounded-tl-[20px]" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#FF4655]/30 rounded-tr-[20px]" />

                <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top
                             filter brightness-90
                             transition-all duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                              from-black via-black/70 to-transparent" />

                {/* İsim ve Rol Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 
                                 text-shadow-lg tracking-wide">
                        {member.name}
                    </h3>
                    <span className={`inline-block px-5 py-2 
                                  ${roleTheme.bg}
                                  border ${roleTheme.border}
                                  text-[${roleTheme.text}] rounded-full 
                                  text-base font-medium`}>
                        {member.role}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

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
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4
                                   tracking-wider text-shadow-xl">
                        <span className="text-[#FF4655]">RUSH</span>GANG
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-[#FF4655] mx-auto mb-6
                                   shadow-[0_0_15px_rgba(255,70,85,0.3)]"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto
                                  font-medium tracking-wide">
                        Savaş Meydanının Efendileri
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                                gap-4 sm:gap-6 lg:gap-8 
                                px-2 sm:px-4 lg:px-0
                                max-w-[1200px] mx-auto
                                py-4">
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