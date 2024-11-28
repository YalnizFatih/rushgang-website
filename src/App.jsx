import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import EkibimizPage from './pages/EkibimizPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ekibimiz" element={<EkibimizPage />} />
                <Route path="/" element={
                    <div className="bg-gaming-dark min-h-screen">
                        <Navbar />
                        <Hero />
                        <About />
                        <Projects />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App; 