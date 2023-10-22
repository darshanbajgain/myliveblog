import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect } from 'react';

const Homepage = ({ blog }) => {
  useEffect(() => {
    // Set metadata for the Homepage
    document.title = "Darshan's Blog";
    document.querySelector('meta[name="description"]').setAttribute('content', "Hi, Welcome to my blog, &lt;/DEV.DARSHAN&gt;");
    document.querySelector('meta[property="og:url"]').setAttribute('content', "https://darshanblog.vercel.app/");
    document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
    document.querySelector('meta[property="og:title"]').setAttribute('content', "Darshan's Blog");
    document.querySelector('meta[property="og:description"]').setAttribute('content', "Hi, Welcome to my blog, &lt;/DEV.DARSHAN&gt;");
    document.querySelector('meta[property="og:image"]').setAttribute('content', "https://darshanblog.vercel.app/images/devdarshan.png");
    document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
    document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "darshanblog.vercel.app");
    document.querySelector('meta[property="twitter:url"]').setAttribute('content', "https://darshanblog.vercel.app/");
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Darshan's Blog");
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Hi, Welcome to my blog, &lt;/DEV.DARSHAN&gt;");
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', "https://darshanblog.vercel.app/images/devdarshan.png");

    // Clean up the metadata when the component unmounts
    return () => {
      document.title = "Default Title";
      document.querySelector('meta[name="description"]').setAttribute('content', "Default Description");
      document.querySelector('meta[property="og:url"]').setAttribute('content', "Default URL");
      document.querySelector('meta[property="og:type"]').setAttribute('content', "Default Type");
      document.querySelector('meta[property="og:title"]').setAttribute('content', "Default Title");
      document.querySelector('meta[property="og:description"]').setAttribute('content', "Default Description");
      document.querySelector('meta[property="og:image"]').setAttribute('content', "Default Image URL");
      document.querySelector('meta[name="twitter:card"]').setAttribute('content', "Default Card");
      document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "Default Domain");
      document.querySelector('meta[property="twitter:url"]').setAttribute('content', "Default URL");
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Default Title");
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Default Description");
      document.querySelector('meta[name="twitter:image"]').setAttribute('content', "Default Image URL");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Blogs blog={blog} />
      <Footer />
    </div>
  );
};

export default Homepage;
