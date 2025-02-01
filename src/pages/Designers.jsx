import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DesignersMain from '../components/DesignersMain';

function Designers(props) {
    useEffect(() => {
        document.title = "Hire Top Freelance Graphic Designers - Search Designers Instantly | Dribbble";
    }, []);

    const [headerHeight, setheaderHeight] = useState(200);
    const [isHeaderSearch, setIsHeaderSearch] = useState(true);

    const handleHeightChange = (height) => {
        setheaderHeight(height);
    };
    return (
        <div>
            <Header sendHeightToParent={handleHeightChange} isHeaderSearch={isHeaderSearch} />
            <DesignersMain headerHeight={headerHeight}/>
            <Footer />
        </div>
    );
}

export default Designers;