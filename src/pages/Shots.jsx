import React, { useState } from 'react';
import Header from '../components/Header';
import ShotsGallery from '../components/ShotsGallery';
import Footer from '../components/Footer';

function Shots(props) {
    const [headerHeight, setheaderHeight] = useState(0);
    const [isHeaderSearch, setIsHeaderSearch] = useState(true);

    const handleHeightChange = (height) => {
      setheaderHeight(height);
    };
    
    return (
        <div>
            <Header sendHeightToParent={handleHeightChange} isHeaderSearch={isHeaderSearch}/>
            <ShotsGallery/>
            <Footer />
        </div>
    );
}

export default Shots;