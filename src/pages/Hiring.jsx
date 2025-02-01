import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HiringHero from '../components/HiringHero';

function Hiring(props) {
    useEffect(() => {
        document.title = "Hire the world’s top designers | Dribbble";
    }, []);
    
    const [headerHeight, setheaderHeight] = useState(0);
    const [isHeaderSearch, setIsHeaderSearch] = useState(true);

    const handleHeightChange = (height) => {
        setheaderHeight(height);
    };
    return (
        <div>
            <Header sendHeightToParent={handleHeightChange} isHeaderSearch={isHeaderSearch}/>
            <HiringHero />
            <Footer />
        </div>
    );
}

export default Hiring;