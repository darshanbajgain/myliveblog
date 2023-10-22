import React, { useEffect } from 'react';
import { Navbar, AboutContent, Footer } from "../components";

const AboutPage = () => {
    useEffect(() => {
        // Set metadata for the About page
        document.title = "About";
        document.querySelector('meta[name="description"]').setAttribute('content', "HELLO, I AM DARSHAN BAJGAIN.");
        document.querySelector('meta[property="og:image"]').setAttribute('content', "https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1702512000&v=beta&t=W5e1A2B-E_AynuySpH0nzwKQbxUEY4ogC9swOA1K9ZU");
    
        // Clean up the metadata when the component unmounts
        return () => {
          document.title = "Darshan's Blog";
          document.querySelector('meta[name="description"]').setAttribute('content', "Welcome to Dev.Darshan");
          document.querySelector('meta[property="og:image"]').setAttribute('content', "../images/devdarshan.png");
        };
      }, [])
    return (
        <div className="home pb-2">
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default AboutPage;
