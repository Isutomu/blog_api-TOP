import Header from "../../components/Header/Header";
import PostsSection from "../../components/PostsSection/PostsSection";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h2>Recent posts</h2>
        <PostsSection />
      </main>
    </>
  );
}

export default HomePage;
