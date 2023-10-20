import React from 'react';
import { Navbar, Footer, BlogContent } from '../components';
import { useParams } from 'react-router-dom'; 


const BlogContentPage = ({ blog }) => {


    const { id } = useParams();
    const selectedBlog = blog.find((item) => item.id === Number(id));
  

     // Metadata for Open Graph and Twitter Cards
     const pageTitle = selectedBlog.title;
     const pageDescription = selectedBlog.desc;
     const pageImageUrl = selectedBlog.coverImg;
   

    return (
        <div>
            <Navbar />
            <BlogContent selectedBlog={selectedBlog} />
            <Footer />
        </div>
    )
}

export default BlogContentPage;