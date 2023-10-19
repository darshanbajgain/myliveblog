import React from 'react';
import { Link } from 'react-router-dom';

const LatestPosts = ({blog}) => {
  return (
    <Link to={`/blog/${blog.id}`}>
    <div className='dark:bg-slate-800 overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
      <img
        className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2'
        src={blog.coverImg}
      />
      <div className='p-4'>
        <h3 className='font-bold text-xl my-l'>{blog.title}</h3>
        <p className='text-gray-300 text-base py-2'>{blog.desc}</p>
      </div>
    </div>
  </Link>

  )
}

export default LatestPosts;