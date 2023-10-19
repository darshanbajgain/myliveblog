
import { Navbar, PostsContents, Footer } from "../components";

const PostsPages = ({blog}) => {
    return (
        <div>
            <Navbar />
            <PostsContents blog={blog}/>
            <Footer />
        </div>
    );
};

export default PostsPages;
