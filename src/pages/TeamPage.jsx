import React from 'react';
import Ekibimiz from '../components/Ekibimiz';
import Navbar from '../components/Navbar';

const TeamPage = () => {
    return (
        <div className="bg-gaming-dark min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Ekibimiz />
            </div>
        </div>
    );
};

export default TeamPage; 