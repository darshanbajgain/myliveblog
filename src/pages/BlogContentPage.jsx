import React from 'react';
import { Navbar, Footer, BlogContent } from '../components';


const BlogContentPage = ({blog}) => {
    return (
        <div>
            <Navbar />
            <BlogContent blog={blog} /> 
            <Footer />
        </div>
    )
}

export default BlogContentPage;