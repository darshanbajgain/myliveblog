import React, { useEffect } from 'react';
import { Navbar, PostsContents, Footer } from "../components";

const PostsPages = ({ blog }) => {
    useEffect(() => {
        // Set metadata for the Postpage
        document.title = "All Blog Posts";
        document.querySelector('meta[name="description"]').setAttribute('content', "Check all of my blog posts here. Explore a collection of insightful blog posts by Darshan Bajgain. Dive into a world of knowledge and inspiration. ");
        document.querySelector('meta[property="og:url"]').setAttribute('content', "https://blogdarshan.netlify.app/posts");
        document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
        document.querySelector('meta[property="og:title"]').setAttribute('content', "Darshan's Blog- Posts");
        document.querySelector('meta[property="og:description"]').setAttribute('content', "Check all of my blog posts here. Explore a collection of insightful blog posts by Darshan Bajgain. Dive into a world of knowledge and inspiration. ");
        document.querySelector('meta[property="og:image"]').setAttribute('content', "../images/devdarshan.png");
        document.querySelector('meta[name="twitter:card"]').setAttribute('content', "summary_large_image");
        document.querySelector('meta[property="twitter:domain"]').setAttribute('content', "blogdarshan.netlify.app");
        document.querySelector('meta[property="twitter:url"]').setAttribute('content', "https://blogdarshan.netlify.app/posts");
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', "Darshan's Blog- Posts");
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', "Check all of my blog posts here. Explore a collection of insightful blog posts by Darshan Bajgain. Dive into a world of knowledge and inspiration. ");
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', "../images/devdarshan.png");

        // Clean up the metadata when the component unmounts
        return () => {
            document.title = "Darshan's Blog";
        };
    }, []);

    return (
        <div>
            <Navbar />
            <PostsContents blog={blog} />
            <Footer />
        </div>
    );
};

export default PostsPages;
