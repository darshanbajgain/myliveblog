import React, { useEffect } from 'react';
import { Navbar, AboutContent, Footer } from "../components";

const AboutPage = () => {
  useEffect(() => {
    // Set metadata for the Postpage
    document.title = "About";
    document.querySelector('meta[name="description"]').setAttribute('content', "Welcome to my blog. I work as a Frontend Web Developer and specialize in HTML, CSS, Javascript, and React JS. Currently, I am expanding my skills to include backend technologies such as Java, and have experience working with databases like SQL and MongoDB.");
    document.querySelector('meta[property="og:url"]').setAttribute('content', "https://blogdarshan.netlify.app/about");
    document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
    document.querySelector('meta[property="og:title"]').setAttribute('content', "Darshan's Blog- About");
    document.querySelector('meta[property="og:description"]').setAttribute('content', "Welcome to my blog. I work as a Frontend Web Developer and specialize in HTML, CSS, Javascript, and React JS. Currently, I am expanding my skills to include backend technologies such as Java, and have experience working with databases like SQL and MongoDB.");
    document.querySelector('meta[property="og:image"]').setAttribute('content', "https://blogdarshan.netlify.app../images/devdarshan.png");
    document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
    document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "darshanblog.vercel.app");
    document.querySelector('meta[property="twitter:url"]').setAttribute('content', "https://blogdarshan.netlify.app/about");
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Darshan's Blog- About");
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Welcome to my blog. I work as a Frontend Web Developer and specialize in HTML, CSS, Javascript, and React JS. Currently, I am expanding my skills to include backend technologies such as Java, and have experience working with databases like SQL and MongoDB.");
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', "https://blogdarshan.netlify.app../images/devdarshan.png");

    // Clean up the metadata when the component unmounts
    return () => {
      document.title = "Darshan's Blog";
      document.querySelector('meta[name="description"]').setAttribute('content', "Hi, Welcome to &lt;/DEV.DARSHAN&gt;, the blog of Darshan Bajgain. Explore a world of insightful articles covering technology,and more. Stay informed, inspired, and up-to-date with our expertly crafted content. ");
      document.querySelector('meta[property="og:url"]').setAttribute('content', "https://blogdarshan.netlify.app/");
      document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
      document.querySelector('meta[property="og:title"]').setAttribute('content', "Darshan's Blog");
      document.querySelector('meta[property="og:description"]').setAttribute('content', "Hi, Welcome to &lt;/DEV.DARSHAN&gt;, the blog of Darshan Bajgain. Explore a world of insightful articles covering technology,and more. Stay informed, inspired, and up-to-date with our expertly crafted content. ");
      document.querySelector('meta[property="og:image"]').setAttribute('content', "https://blogdarshan.netlify.app../images/devdarshan.png");
      document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
      document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "blogdarshan.netlify.app");
      document.querySelector('meta[property="twitter:url"]').setAttribute('content', "https://blogdarshan.netlify.app/");
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Darshan's Blog");
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Hi, Welcome to &lt;/DEV.DARSHAN&gt;, the blog of Darshan Bajgain. Explore a world of insightful articles covering technology,and more. Stay informed, inspired, and up-to-date with our expertly crafted content. ");
      document.querySelector('meta[name="twitter:image"]').setAttribute('content', "https://blogdarshan.netlify.app../images/devdarshan.png"); 
    };
  }, []);

    return (
        <div className="home pb-2">
            <Navbar />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default AboutPage;
