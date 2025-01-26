import usePostData from "../../utils/customHooks/usePostData";
import PostCard from "../PostCard/PostCard";
import styles from "./PostsCardsWrapper.module.css";

function PostsCardsWrapper() {
  // This URL returns an array of posts previews
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL}/posts`
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
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsCardsWrapper;
