// useMarkdownLoader.js
import { useEffect, useState } from 'react';

const useMarkdownLoader = (markdownFile) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownFile);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdown();
  }, [markdownFile]);

  return markdownContent;
};

export default useMarkdownLoader;
