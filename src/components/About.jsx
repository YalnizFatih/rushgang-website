import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about" className="py-20 bg-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Sol taraf - Resim */}
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Ana görsel */}
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={process.env.PUBLIC_URL + "/images/pubg-weapon-character-actor-man-1.png"}
                                    alt="PUBG Character"
                                    className="w-full h-auto rounded-lg object-contain"
                                    style={{
                                        background: 'transparent'
                                    }}
                                    onError={(e) => {
                                        console.log("Resim yüklenemedi, yol:", e.target.src);
                                        e.target.src = "https://via.placeholder.com/500x600";
                                    }}
                                />
                            </div>

                            {/* Dekoratif elementler */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-10"></div>
                        </motion.div>
                    </div>

                    {/* Sağ taraf - İçerik */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Hakkımızda
                            </h2>
                            <div className="w-20 h-1 bg-primary mb-6"></div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Merhaba! PUBG Mobile E-spor dünyasında yeni başlayan takımlar için özel turnuvalar ve
                                eğitim programları düzenliyoruz. Amacımız, yeni oyuncuların e-spor sahnesine adım atmasını
                                kolaylaştırmak ve onlara gelişim fırsatları sunmak.
                            </p>

                            {/* İstatistikler */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-dark/50 p-4 rounded-lg border border-primary/20">
                                    <h3 className="text-primary text-2xl font-bold">3+</h3>
                                    <p className="text-gray-400">Yıllık Deneyim</p>
                                </div>
                                <div className="bg-dark/50 p-4 rounded-lg border border-primary/20">
                                    <h3 className="text-primary text-2xl font-bold">20+</h3>
                                    <p className="text-gray-400">Turnuva Organizasyonu</p>
                                </div>
                            </div>

                            {/* Yetenekler */}
                            <div className="mt-8">
                                <h3 className="text-white text-xl mb-4">Uzmanlık Alanları</h3>
                                <div className="space-y-3">
                                    {[
                                        { skill: "Turnuva Organizasyonu", level: "95%" },
                                        { skill: "Takım Yönetimi", level: "90%" },
                                        { skill: "E-Spor Stratejisi", level: "85%" }
                                    ].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                                                <span>{item.skill}</span>
                                                <span>{item.level}</span>
                                            </div>
                                            <div className="w-full bg-dark/50 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: item.level }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.3 * index }}
                                                    className="bg-primary h-2 rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About; 