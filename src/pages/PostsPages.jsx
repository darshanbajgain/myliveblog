import React, { useEffect } from 'react';
import { Navbar, PostsContents, Footer } from "../components";

const PostsPages = ({blog}) => {
    useEffect(() => {
        // Set metadata for the Postpage
        document.title ="All Blog Posts";
        document.querySelector('meta[name="description"]').setAttribute('content', "Check all of my blog posts here");
        document.querySelector('meta[property="og:url"]').setAttribute('content', "https://darshanblog.vercel.app/posts");
        document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
        document.querySelector('meta[property="og:title"]').setAttribute('content', "Darshan's Blog- Posts");
        document.querySelector('meta[property="og:description"]').setAttribute('content', "Check all of my blog posts here");
        document.querySelector('meta[property="og:image"]').setAttribute('content', "https://darshanblog.vercel.app/images/devdarshan.png");
        document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
        document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "darshanblog.vercel.app");
        document.querySelector('meta[property="twitter:url"]').setAttribute('content', "https://darshanblog.vercel.app/posts");
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Darshan's Blog- Posts");
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Check all of my blog posts here");
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', "https://darshanblog.vercel.app/images/devdarshan.png");
    
        // Clean up the metadata when the component unmounts
        return () => {
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
        };
      }, []);

    return (
        <div>
            <Navbar />
            <PostsContents blog={blog}/>
            <Footer />
        </div>
    );
};

export default PostsPages;
