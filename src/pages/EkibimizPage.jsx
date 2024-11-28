import React from 'react';
import Team from '../components/Team';
import Navbar from '../components/Navbar';

const EkibimizPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gaming-dark min-h-screen">
                <div className="pt-20" id="ekibimiz">
                    <Team />
                </div>
            </div>
        </>
    );
};

export default EkibimizPage;

