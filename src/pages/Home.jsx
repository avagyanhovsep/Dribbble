import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import ShotsGallery from '../components/ShotsGallery';
import Footer from '../components/Footer';

function Home(props) { 
    const [headerHeight, setheaderHeight] = useState(0);

    const handleHeightChange = (height) => {
      setheaderHeight(height);
    };

    return (
        <div>
            <Header sendHeightToParent={handleHeightChange}/>
            <Main headerHeight={headerHeight}/>
            <ShotsGallery />
            <Footer />
        </div>
    );
}

export default Home;