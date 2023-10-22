import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownLoader from '../utilities/useMarkdownLoader';
import '../custom.css';

const BlogContent = ({ selectedBlog }) => {

  useEffect(() => {
    if (selectedBlog) {
      // Update metadata for the selected blog
      document.title = selectedBlog.title;
      document.querySelector('meta[name="description"]').setAttribute('content', selectedBlog.desc);
      document.querySelector('meta[property="og:title"]').setAttribute('content', selectedBlog.title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', selectedBlog.desc);
      document.querySelector('meta[property="og:image"]').setAttribute('content', selectedBlog.coverImg);
      // You can add more metadata fields specific to the selected blog
    }
  }, [selectedBlog]);

  if (!selectedBlog) {
    return <div>Blog not found.</div>;
  }

  // Extract relevant data from the blog
  const { id, title, coverImg, authorProfileImg, author, date } = selectedBlog;

  //Markdown
  const markdownFile = `/markdown/blog-${id}.md`;
  const markdownContent = useMarkdownLoader(markdownFile);

  return (
    <div className="w-full py-16 px-8 relative bg-gray-800">

      <div className="max-w-[1340px] mx-auto px-1 pt-24">
        <div className="flex flex-col items-center">
          <img className='lg:max-w-[800px] sm:max-w-[600px] ss:min-w-[200px]  lg:px-2 py-4' src={coverImg} alt={title} />
          <ReactMarkdown
            className="prose custom-prose-links  md:p-1 lg:p-2 prose-pre:mx-auto prose-pre:max-w-[250px] prose-pre:bg-slate-700 ss:prose-pre:max-w-full prose-headings:text-white
             prose-p:text-white prose-ul:text-white prose-img:max-w-[330px] prose-img:mx-auto sm:prose-img:max-w-[600px] prose-strong:text-white sm:sm:text-base md:text-lg lg:text-xl"
          >
            {markdownContent}
          </ReactMarkdown>
          <div className="flex flex-col items-center max-w-[800px] mx-auto px-8 py-6 rounded-2xl mt-16">
            <img
              className="w-16 h-16 rounded-full mb-2"
              src={authorProfileImg}
              alt={author}
            />
            <p className="text-gray-300 py-2 overflow-hidden">Written by:</p>
            <div className="text-gray-300">{author}</div>
            <div className="text-gray-300 mt-2">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
