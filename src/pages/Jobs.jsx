import React, { useEffect, useState } from 'react';
import JobsMain from '../components/JobsMain';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Jobs(props) {
    useEffect(() => {
        document.title = "Post a Design Job | Dribbble";
    }, []);
    
    const [headerHeight, setheaderHeight] = useState    (0);
    const [isHeaderSearch, setIsHeaderSearch] = useState(true);

    const handleHeightChange = (height) => {
        setheaderHeight(height);
    };
    
    return (
        <div>
            <Header sendHeightToParent={handleHeightChange} isHeaderSearch={isHeaderSearch}/>
            <JobsMain />
            <Footer />  
        </div>
    );
}

export default Jobs;