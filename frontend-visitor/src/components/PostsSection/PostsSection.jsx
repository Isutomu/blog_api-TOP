import usePostData from "../../utils/customHooks/usePostData";
import PostPreview from "../PostPreview/PostPreview";
import styles from "./PostsSection.module.css";

function PostsSection() {
  // This URL returns an array of posts previews
  const { data, error, loading } = usePostData(
    import.meta.env.VITE_API_URL_POSTS
  );

  if (error) {
    return <span>{error.message}</span>;
  }
  if (loading) {
    return <span>loading</span>;
  }
  if (!data) {
    return <span>no posts</span>;
  }

  return (
    <section className={styles.postsWrapper}>
      <div className={styles.postFeed}>
        {data.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsSection;
