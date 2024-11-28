import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="home" className="h-screen relative overflow-hidden bg-gaming-dark">
            {/* Yumuşak Arka Plan */}
            <div className="absolute inset-0">
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark via-gaming-dark/95 to-gaming-dark" />

                {/* Subtle animated background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gaming-blue/20 rounded-full filter blur-3xl animate-float" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gaming-purple/20 rounded-full filter blur-3xl animate-float delay-1000" />
                </div>
            </div>

            {/* Ana İçerik */}
            <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
                <div className="max-w-4xl">
                    {/* PUBG Mobile Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <span className="bg-gaming-gray/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gaming-blue border border-gaming-blue/20">
                            PUBG MOBILE ESPORTS
                        </span>
                    </motion.div>

                    {/* Ana Başlık */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        BTB AGENCY
                    </motion.h1>

                    {/* Açıklama */}
                    <h2 className="text-xl md:text-2xl text-gaming-blue mb-8">
                        PUBG Mobile Turnuva & Scrim Organizasyonu
                    </h2>
                    <p className="text-gray-300 mb-12">
                        Yeni başlayan takımlar için özel turnuvalar ve scrimler düzenleyen genç ve dinamik ekip.
                        Discord topluluğumuzda rekabetçi ve eğlenceli bir ortam sunuyoruz.
                    </p>

                    {/* İstatistikler */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-3 gap-8 mb-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gaming-blue mb-1">10+</div>
                            <div className="text-gray-400">Turnuvalar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gaming-blue mb-1">200+</div>
                            <div className="text-gray-400">Oyuncular</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gaming-blue mb-1">500₺</div>
                            <div className="text-gray-400">Ödül Havuzu</div>
                        </div>
                    </motion.div>

                    {/* CTA Butonları */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-gaming-blue text-gaming-dark font-semibold rounded-lg 
                                     hover:bg-gaming-blue/90 transition-colors duration-300"
                        >
                            Projelerimizi İncele
                        </Link>

                    </motion.div>
                </div>
            </div>

            {/* Scroll İndikatör */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="text-gaming-blue/50 text-sm mb-2 text-center">Keşfet</div>
                <div className="w-5 h-8 border border-gaming-blue/20 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-gaming-blue/50 rounded-full mt-1"
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero; 