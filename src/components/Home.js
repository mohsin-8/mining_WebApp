import React from 'react';

// import Components
import Navbar from './Navbar/Navbar';
import About from './Sections/About';
import Section_One from './Sections/Section_One';

function Home() {
    return (
        <>
            <Navbar />
            <Section_One />
            <About />
        </>
    )
}

export default Home;
