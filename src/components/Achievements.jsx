import React from 'react';
import { motion } from 'framer-motion';

// PUBG temalı SVG ikonları
const icons = {
    tournament: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15l-2 5l9-11h-3l2-5l-9 11h3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3l14 18" />
        </svg>
    ),
    players: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    prize: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
};

const achievements = [
    {
        icon: 'tournament',
        value: '10+',
        label: 'Düzenlenen Turnuva',
        description: 'Arkadaş ortamında eğlenceli turnuvalar'
    },
    {
        icon: 'players',
        value: '200+',
        label: 'Aktif Oyuncu',
        description: 'Discord topluluğumuzdaki oyuncular'
    },
    {
        icon: 'prize',
        value: '500₺',
        label: 'Toplam Ödül',
        description: 'Haftalık küçük ödüllü turnuvalar'
    }
];

const AchievementCard = ({ icon, value, label, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-primary mb-4"
            >
                {icons[icon]}
            </motion.div>
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white mb-2"
            >
                {value}
            </motion.h3>
            <h4 className="text-xl text-primary mb-2">{label}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <div id="achievements" className="py-20 bg-gaming-dark relative overflow-hidden">
            {/* Dekoratif arka plan elementleri */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Başlık */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Başarılarımız
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        PUBG Mobile e-spor dünyasında elde ettiğimiz başarılar ve kilometre taşları
                    </p>
                </motion.div>

                {/* İstatistikler */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            {...achievement}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements; 