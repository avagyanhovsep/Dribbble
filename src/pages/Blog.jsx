import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogMain from '../components/BlogMain';

function Blog(props) {
    useEffect(() => {
        document.title = "Stories—the Design Blog by Dribbble";
    }, []);
    
    const [headerHeight, setheaderHeight] = useState(0);
    const [isHeaderSearch, setIsHeaderSearch] = useState(true);

    const handleHeightChange = (height) => {
        setheaderHeight(height);
    };
    
    return (
        <div>
            <Header sendHeightToParent={handleHeightChange} isHeaderSearch={isHeaderSearch}/>
            <BlogMain />
            <Footer />
        </div>
    );
}

export default Blog;