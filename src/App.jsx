import { Homepage,AboutPage,BlogContentPage, PostsPages } from "./pages";
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from "./utilities/ScrollToTop";

export default function App() {
  const blog = [
    {
      "id": 1,
      'title': 'Troubleshooting Rendring Issue with Tailwind in React App using',
      'desc': 'Are you encountering issues with rendering Markdown content in your React app that uses Tailwind CSS? In this blog post, I will mention the problem and also provide solutions to ensure your Markdown content renders beautifully in your React application.',
      'coverImg': '../images/RenderIssueCoverImg.png',
      'author': 'Darshan Bajgain',
      'date': 'October 20, 2023',
      'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

    },
    {
      "id": 2,
      'title': 'Creating a dynamic Blog with Vite React, Strapi and Tailwind.',
      'desc': 'Learn how to build an interactive dynamic blog with Vite, React, Strapi CMS, and Tailwind CSS, from setup to content management, in this comprehensive guide.',
      'coverImg': '../images/builblogRvS.png',
      'author': 'Darshan Bajgain',
      'date': 'October 20, 2023',
      'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

    },
    {
      "id": 3,
      'title': 'Java-React Fullstack Devloper Pathway',
      'desc': 'Embark on the journey to becoming a proficient Java-React fullstack developer by following our comprehensive pathway. From mastering Java to building dynamic web applications with React, this guide will lead you through every step of your development career.',
      'coverImg': '../images/Java-ReactFull-StackDeveloperPathway.png',
      'author': 'Darshan Bajgain',
      'date': 'October 20, 2023',
      'authorProfileImg': 'https://media.licdn.com/dms/image/D5603AQHiTbxjVI1AEQ/profile-displayphoto-shrink_800_800/0/1682674343890?e=1701907200&v=beta&t=0ASP4jhQWmTvpo5NIi96n_Mq_OQHR83mG9_MqbbKNrE'

    },

  ]
 
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage blog={blog}/>} />
        <Route path='/blog/:id' element={<BlogContentPage blog={blog} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPages blog={blog} />} />
      </Routes>
    </div>
  )
}