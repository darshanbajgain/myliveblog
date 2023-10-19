import React from 'react';
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Homepage = ({ blog }) => {


    return (
        <div>
            <Navbar />
            <Blogs blog={blog} />
            <Footer />
        </div>
    )
}

export default Homepage;