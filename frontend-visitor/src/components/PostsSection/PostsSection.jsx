import usePosts from "../../utils/customHooks/usePosts";
import PostPreview from "../PostPreview/PostPreview";
import styles from "./PostsSection.module.css";

function PostsSection() {
  const { posts, error, loading } = usePosts(
    import.meta.env.VITE_API_URL_POSTS
  );

  if (error) {
    return <span>{error.message}</span>;
  }
  if (loading) {
    return <span>loading</span>;
  }
  if (!posts) {
    return <span>no posts</span>;
  }

  return (
    <section className={styles.postsWrapper}>
      <div className={styles.postFeed}>
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsSection;
