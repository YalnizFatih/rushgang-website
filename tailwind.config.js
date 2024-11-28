module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gaming-red': '#FF0A54',
                'gaming-blue': '#00F5FF',
                'gaming-purple': '#7B2CBF',
                'gaming-yellow': '#FFD600',
                'gaming-dark': '#0A0A0B',
                'gaming-gray': '#1F1F25',
                'gaming-light': '#2A2A35',
                'neon-blue': '#00F5FF',
                'neon-pink': '#FF10F0',
                'cyber-green': '#39FF14'
            },
            backgroundImage: {
                'gradient-gaming': 'linear-gradient(to right, #FF0A54, #7B2CBF)',
                'gradient-neon': 'linear-gradient(to right, #00F5FF, #FF10F0)',
                'gradient-cyber': 'linear-gradient(to bottom, rgba(10, 10, 11, 0.9), rgba(10, 10, 11, 0.7))',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF' },
                    '100%': { boxShadow: '0 0 20px #00F5FF, 0 0 30px #00F5FF, 0 0 40px #00F5FF' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'pulse-neon': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 }
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '33%': { transform: 'translate(-5px, 2px)' },
                    '66%': { transform: 'translate(5px, -2px)' }
                }
            }
        },
    },
    plugins: [],
} 