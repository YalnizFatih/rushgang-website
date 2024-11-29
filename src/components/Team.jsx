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
                border: 'border-[#ff4655]/30'
            };
        case 'menejer':
            return {
                text: '#ff9f1c',
                bg: 'bg-[#1a1916]',
                border: 'border-[#ff9f1c]/30'
            };
        case 'scrim oyuncusu':
            return {
                text: '#3b82f6',
                bg: 'bg-[#161a1f]',
                border: 'border-[#3b82f6]/30'
            };
        default:
            return {
                text: '#ffd700',
                bg: 'bg-[#1a1914]',
                border: 'border-[#ffd700]/30'
            };
    }
};

const PlayerModal = ({ member, isOpen, onClose }) => {
    const roleTheme = member ? getRoleTheme(member.role) : null;

    // Role'e göre renk teması
    const themeColor = roleTheme?.text || '#FF4655';

    return (
        <AnimatePresence>
            {isOpen && member && (
                <>
                    {/* Backdrop with Dynamic Pattern */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 z-[60]"
                    >
                        {/* Animasyonlu Arkaplan Deseni */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
                        <div className="absolute inset-0 noise-pattern opacity-20 mix-blend-overlay" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-[95%] sm:w-full max-w-[600px] 
                                     bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A] 
                                     rounded-xl overflow-hidden"
                            style={{
                                borderColor: `${themeColor}20`,
                                borderWidth: '1px',
                                boxShadow: `0 0 50px ${themeColor}10`
                            }}
                        >
                            {/* Resim Container - Mobil için daha küçük yükseklik */}
                            <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                                {/* Üst Kısım - Hero Section */}
                                <div className="relative">
                                    {/* Resim Container */}
                                    <div className="relative h-[400px] overflow-hidden">
                                        <motion.img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover filter brightness-90"
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.8 }}
                                        />

                                        {/* Dinamik Overlay Efektleri */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
                                        <div className="absolute inset-0 noise-pattern opacity-20 mix-blend-overlay" />

                                        {/* Köşe Süsleri */}
                                        <div className="absolute top-0 left-0 w-32 h-32">
                                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF4655] to-transparent" />
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF4655] to-transparent" />
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 transform rotate-90">
                                            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-[#FF4655] to-transparent" />
                                            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#FF4655] to-transparent" />
                                        </div>

                                        {/* Oyuncu Bilgileri Overlay - Mobil için padding ayarı */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                                            <div className="space-y-3 sm:space-y-4">
                                                {/* Üst Badges - Mobil için daha küçük */}
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs font-bold"
                                                        style={{
                                                            backgroundColor: themeColor,
                                                            boxShadow: `0 0 20px ${themeColor}30`
                                                        }}>
                                                        {member.role.toUpperCase()}
                                                    </div>
                                                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-black/50 backdrop-blur-sm 
                                                                  rounded-md text-xs font-bold text-white">
                                                        ID: {member.pubgId}
                                                    </div>
                                                </div>

                                                {/* İsim ve Discord - Mobil için daha küçük */}
                                                <div>
                                                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                                                        {member.name}
                                                    </h2>
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4655]" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                        </svg>
                                                        <span className="text-xs sm:text-sm">{member.discord}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alt Kısım - Content Section */}
                            <div className="p-4 sm:p-8 bg-gradient-to-b from-black/95 to-[#0A0A0A]">
                                {/* Hakkında Bölümü */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-1 h-4" style={{ backgroundColor: themeColor }} />
                                        <h3 className="text-[#FF4655] font-bold tracking-wider">HAKKINDA</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed pl-3 border-l border-[#FF4655]/20">
                                        {member.description}
                                    </p>
                                </div>

                                {/* Sosyal Medya Bağlantıları */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-1 h-4" style={{ backgroundColor: themeColor }} />
                                        <h3 className="text-[#FF4655] font-bold tracking-wider">SOSYAL MEDYA</h3>
                                    </div>
                                    <div className="flex gap-3 pl-3">
                                        {Object.entries(member.social).map(([platform, url]) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-[#FF4655]/5 rounded-lg 
                                                         border border-[#FF4655]/20
                                                         hover:bg-[#FF4655]/10 
                                                         hover:border-[#FF4655]/40
                                                         hover:scale-110
                                                         transition-all duration-300
                                                         group"
                                            >
                                                <SocialIcon platform={platform} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Kapatma Butonu - Mobil için daha küçük */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 sm:top-4 right-3 sm:right-4 
                                         p-2 sm:p-2.5 rounded-lg
                                         bg-black/50 backdrop-blur-sm
                                         border border-white/10
                                         hover:bg-[#FF4655]/20 
                                         hover:border-[#FF4655]/40
                                         transition-all duration-300
                                         group"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const TeamMemberCard = ({ member, index, onOpenModal }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -8 }}
            onClick={() => onOpenModal(member)}
            className={`group relative overflow-hidden cursor-pointer
                      w-[90%] sm:w-full mx-auto  // Mobil için genişlik ayarı
                      max-w-sm 
                      bg-[#1E2433]/90 backdrop-blur-md
                      border border-[#3B82F6]/20
                      rounded-[20px] sm:rounded-[24px]  // Mobil için daha küçük border-radius
                      transition-all duration-500
                      hover:border-[#FF4655]/50
                      hover:shadow-[0_0_30px_rgba(255,70,85,0.2)]
                      hover:bg-[#232B3D]/90`}
        >
            {/* Cyber Köşe Süsleri */}
            <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-2 h-8 bg-[#FF4655]/30 transform -rotate-45" />
                <div className="absolute top-0 left-0 h-2 w-8 bg-[#FF4655]/30 transform -rotate-45" />
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 transform rotate-90">
                <div className="absolute top-0 left-0 w-2 h-8 bg-[#FF4655]/30 transform -rotate-45" />
                <div className="absolute top-0 left-0 h-2 w-8 bg-[#FF4655]/30 transform -rotate-45" />
            </div>

            {/* Resim Bölümü */}
            <div className="relative h-[300px] sm:h-[350px] overflow-hidden">  {/* Mobil için daha küçük yükseklik */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />

                <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center
                             transition-all duration-700 ease-out
                             group-hover:scale-110 group-hover:brightness-110"
                />

                {/* Cyber Frame Overlay */}
                <div className="absolute inset-0 cyber-grid opacity-30 mix-blend-soft-light
                              group-hover:opacity-50 transition-all duration-500" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                              from-black via-black/50 to-transparent" />

                {/* Role Badge - Mobil için daha küçük padding */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                    <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                                  backdrop-blur-md bg-black/30
                                  border border-[#FF4655]/30
                                  text-xs sm:text-sm  // Mobil için daha küçük font
                                  group-hover:border-[#FF4655]/60
                                  transition-all duration-500">
                        <span className="font-medium" style={{ color: '#FF4655' }}>
                            {member.role}
                        </span>
                    </div>
                </div>

                {/* İsim ve Sosyal Medya */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4
                                 tracking-wide text-shadow-lg
                                 group-hover:text-[#FF4655] transition-colors duration-300">
                        {member.name}
                    </h3>

                    {/* Sosyal Medya İkonları */}
                    <div className="flex items-center gap-2 sm:gap-3 
                                  opacity-0 -translate-y-4
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-500 ease-out">
                        {Object.entries(member.social).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 sm:p-2 rounded-lg  // Mobil için daha küçük padding
                                        bg-black/30 backdrop-blur-sm
                                        border border-[#FF4655]/20
                                        hover:border-[#FF4655]/60
                                        hover:bg-[#FF4655]/10
                                        transition-all duration-300"
                            >
                                <SocialIcon platform={platform} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hover Efekti - Cyber Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-1/2 h-full w-[1px] 
                                  bg-gradient-to-b from-[#FF4655]/0 via-[#FF4655]/50 to-[#FF4655]/0" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px]
                                  bg-gradient-to-r from-[#FF4655]/0 via-[#FF4655]/50 to-[#FF4655]/0" />
                </div>
            </div>
        </motion.div>
    );
};

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2A3444]">
            {/* Animasyonlu Pattern'lar */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B82F6_0%,transparent_100%)] opacity-5" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF4655_0%,transparent_100%)] opacity-5" />
                <div className="absolute inset-0 cyber-grid opacity-10" />
            </div>

            {/* Animasyonlu Parçacıklar */}
            <div className="absolute inset-0 particles-bg" />

            {/* Kart stilleri için güncellemeler */}
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-32 relative">
                {/* Başlık Bölümü */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center pt-20 mb-16 sm:mb-20"
                >
                    <div className="relative inline-block">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4
                                     tracking-wider text-shadow-xl relative z-10">
                            <span className="text-[#FF4655] mr-2">RUSH</span>
                            <span className="relative text-gray-100">GANG</span>
                        </h2>
                        {/* Dekoratif Elementler - daha açık tonlar */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2
                                      border-[#FF4655]/40 rounded-tl-xl" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2
                                      border-[#FF4655]/40 rounded-br-xl" />
                    </div>

                    <p className="text-gray-300 text-lg max-w-2xl mx-auto
                                font-medium tracking-wide mt-6">
                        Savaş Meydanının Efendileri
                    </p>
                </motion.div>

                {/* Takım Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                              gap-6 sm:gap-8 lg:gap-10 
                              px-2 sm:px-4 lg:px-0
                              max-w-[1200px] mx-auto
                              relative z-10">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={member.id}
                            member={member}
                            index={index}
                            onOpenModal={setSelectedMember}
                        />
                    ))}
                </div>
            </div>

            <PlayerModal
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
            />
        </div>
    );
};

export default Team; 