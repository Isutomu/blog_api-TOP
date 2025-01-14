import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostFullView from "../../components/PostFullView/PostFullView";

function PostPage() {
  const { postId } = useParams();

  return (
    <>
      <Header />
      <PostFullView postId={postId} />
      <Footer />
    </>
  );
}

export default PostPage;
