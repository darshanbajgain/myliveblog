import { Link } from 'react-router-dom';

const PostsContents = ({blog}) => {
    console.log("postpage is loading");

  return (

    <div className='w-full home text-white p-6'>
      <div className='lg:max-w-[1240px] md:max-w-[1100px] sm:max-w-[780px] ss:max-w-[550px] mx-auto py-24 lg:px-4 my-6'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold py-4 lg:py-6 mb-2'>All Blogs</h1>
        <div className='grid  ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 '>

          {
            blog.map((blog) =>
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className='post overflow-hidden rounded-xl shadow-inner hover:bg-slate-700 drop-shadow-2xl'>
                  <img className='h-62 w-[100%] object-cover rounded-2xl m-auto p-2 ' src={blog.coverImg} />
                  <div className='p-4'>
                    <h3 className='font-bold text-xl my-l'>{blog.title}</h3>
                    <p className='text-gray-300 text-base py-2'>
                      {blog.desc}
                    </p>
                  </div>
                </div>
              </Link>
            )
          }

        </div>
      </div>
    </div>
  )
};

export default PostsContents;