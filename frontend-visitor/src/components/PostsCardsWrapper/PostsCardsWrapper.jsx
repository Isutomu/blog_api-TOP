import PostCard from "../PostCard/PostCard";
import PropTypes from "prop-types";
import styles from "./PostsCardsWrapper.module.css";

function PostsCardsWrapper({ data }) {
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

PostsCardsWrapper.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PostsCardsWrapper;
