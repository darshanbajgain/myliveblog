import React, { useEffect } from 'react';
import { Navbar, Footer, BlogContent } from '../components';
import { useParams } from 'react-router-dom'; 


const BlogContentPage = ({ blog }) => {

    const { id } = useParams();
    const selectedBlog = blog.find((item) => item.id === Number(id));
  
   
    return (
        <div>
            <Navbar />
            <BlogContent selectedBlog={selectedBlog} />
            <Footer />
        </div>
    )
}

export default BlogContentPage;