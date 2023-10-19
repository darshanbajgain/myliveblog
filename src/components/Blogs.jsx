import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedBlogs from './FeaturedBlogs';
import LatestPosts from './LatestPosts';

const Blogs = ({blog}) => {

   



  // Define the IDs of the featured blogs from Strapi
  const featuredBlogIds = [1, 2]; // Replace with your featured blog IDs

  // Filter the featured blogs based on their IDs
  const featuredBlogs = blog.filter((blog) => featuredBlogIds.includes(blog.id));

  // Filter the latest posts (1-2 most recent posts)
  const latestPosts = blog.filter((blog) => !featuredBlogIds.includes(blog.id))
  .slice(0, 3); // Adjust the number of latest posts as needed


  return (

    <div className='w-ful dark:bg-gray-900 text-white p-6'>
      <div className='max-w-[1340px] mx-auto'>

        <div className='w-full pt-32 lg:mt-16 lg:pt-16 text-center mb-6'>
          <h2 className='lg:text-3xl text-2xl lg:py-4 font-bold text-white mb-4'>Featured Content</h2>
          <div className='grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {featuredBlogs.map((blog) => (
              <FeaturedBlogs key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        <div className='w-full text-center my-6 py-8'>
          <h2 className='text-2xl lg:text-3xl font-bold text-white py-4 mb-4'>Latest Posts</h2>
          <div className='grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {latestPosts.map((blog) => (
              <LatestPosts key={blog.id} blog={blog}/>
            ))}
          </div>
        </div>
        <div className='w-full text-center mb-8 py-2'>
          <Link to='/posts'>
            <button className='bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-full text-sm uppercase'>
              Load More
            </button>
          </Link>
        </div>


      </div>
    </div>
  )
};

export default Blogs;