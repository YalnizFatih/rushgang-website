import React, { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
    {
        name: 'Discord',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
        ),
        href: 'https://discord.gg/yourdiscord',
        color: 'hover:text-[#7289DA]'
    },
    {
        name: 'Twitter',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
        ),
        href: 'https://twitter.com/yourprofile',
        color: 'hover:text-[#1DA1F2]'
    },
    {
        name: 'LinkedIn',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        href: 'https://linkedin.com/in/yourprofile',
        color: 'hover:text-[#0A66C2]'
    }
];

const InputField = ({ label, type, name, placeholder, value, onChange, error }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-6"
    >
        <label className="text-gray-300 text-sm mb-1 block">{label}</label>
        {type === 'textarea' ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-dark/50 border ${error ? 'border-red-500' : 'border-primary/20'} rounded-lg p-3 text-white focus:outline-none focus:border-primary/60 transition-colors duration-300 placeholder-gray-500 backdrop-blur-sm`}
                rows="4"
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full bg-dark/50 border ${error ? 'border-red-500' : 'border-primary/20'} rounded-lg p-3 text-white focus:outline-none focus:border-primary/60 transition-colors duration-300 placeholder-gray-500 backdrop-blur-sm`}
            />
        )}
        {error && (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-1"
            >
                {error}
            </motion.p>
        )}
    </motion.div>
);

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.name.trim()) newErrors.name = 'İsim gerekli';
        if (!formState.email.trim()) {
            newErrors.email = 'E-posta gerekli';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi girin';
        }
        if (!formState.message.trim()) newErrors.message = 'Mesaj gerekli';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simüle edilmiş form gönderimi
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    return (
        <div id="contact" className="py-20 bg-dark relative overflow-hidden">
            {/* Dekoratif arka plan elementleri */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Başlık */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        İletişime Geç
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Turnuva organizasyonu, e-spor danışmanlığı veya işbirliği için benimle iletişime geçin
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="bg-dark/40 backdrop-blur-md rounded-2xl p-8 border border-primary/10"
                >
                    <InputField
                        label="İsim"
                        type="text"
                        name="name"
                        placeholder="Adınız"
                        value={formState.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <InputField
                        label="E-posta"
                        type="email"
                        name="email"
                        placeholder="E-posta adresiniz"
                        value={formState.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <InputField
                        label="Mesaj"
                        type="textarea"
                        name="message"
                        placeholder="Mesajınızı yazın..."
                        value={formState.message}
                        onChange={handleChange}
                        error={errors.message}
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 
                            ${isSubmitting ? 'bg-primary/50' : 'bg-primary hover:bg-primary/90'}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Gönderiliyor...
                            </span>
                        ) : 'Gönder'}
                    </motion.button>

                    {/* Submit Status Messages */}
                    {submitStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mt-4 p-3 rounded-lg text-center ${submitStatus === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                                }`}
                        >
                            {submitStatus === 'success'
                                ? 'Mesajınız başarıyla gönderildi!'
                                : 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                        </motion.div>
                    )}
                </motion.form>

                {/* Sosyal Medya Linkleri */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-white text-xl mb-6">Sosyal Medya</h3>
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact; 