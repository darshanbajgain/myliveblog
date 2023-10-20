
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import useMarkdownLoader from '../utilities/useMarkdownLoader';

const BlogContent = ({ blog }) => {
  const { id } = useParams();
  const selectedBlog = blog.find((item) => item.id === Number(id));

  if (!selectedBlog) {
    return <div>Blog not found.</div>;
  }

  const markdownFile = `/markdown/blog-${id}.md`;
  const markdownContent = useMarkdownLoader(markdownFile);

  return (
    <div className="w-full py-16 px-8 relative bg-gray-900">
      <div className="max-w-[1340px] mx-auto px-1 pt-24">
        <div className="flex flex-col items-center">
          <img className='lg:max-w-[800px] sm:max-w-[600px] ss:min-w-[200px]  lg:px-2 py-4' src={selectedBlog.coverImg} alt={selectedBlog.title} />
          <ReactMarkdown
            className="prose md:p-1 lg:p-2 prose-pre:mx-auto prose-pre:max-w-[250px] ss:prose-pre:max-w-full prose-headings:text-white prose-p:text-white prose-ul:text-white prose-img:max-w-[330px] prose-img:mx-auto sm:prose-img:max-w-[600px] prose-strong:text-white sm:sm:text-base md:text-lg lg:text-xl"
          >
            {markdownContent}
          </ReactMarkdown>
          <div className="flex flex-col items-center max-w-[500px] mx-auto px-8 py-6 bg-slate-800 rounded-2xl mt-16">
            <img
              className="w-16 h-16 rounded-full mb-2"
              src={selectedBlog.authorProfileImg}
              alt={selectedBlog.author}
            />
            <p className="text-gray-300 py-2 overflow-hidden">Written by:</p>
            <div className="text-gray-300">{selectedBlog.author}</div>
            <div className="text-gray-300 mt-2">{selectedBlog.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
