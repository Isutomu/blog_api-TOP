import PropTypes from "prop-types";
import styles from "./PostPreview.module.css";

function generateFooterText(post) {
  const createdAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(post.createdAt));

  const updatedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(post.updatedAt));

  const tags = post.tags.join("<br>");

  const didUpdate = createdAt !== updatedAt;
  return `${createdAt}   •   ${tags}${
    didUpdate ? `   •   last update ${updatedAt}` : ""
  }`;
}

function PostPreview({ post }) {
  const footer = generateFooterText(post);

  return (
    <article className={styles.postArticle}>
      <a className={styles.postImageLink} href={`/posts/${post.id}`}>
        <img className={styles.postImage} src={post.img} alt="" />
      </a>
      <div className={styles.postPreviewContent}>
        <a href={`/posts/${post.id}`}>
          <header>
            <h3 className={styles.postTitle}>{post.title}</h3>
          </header>{" "}
          <p className={styles.postPreviewText}>{post.contentPreview}</p>
        </a>
        {footer ? (
          <footer className={styles.postPreviewFooter}>
            <span>{footer}</span>
          </footer>
        ) : null}
      </div>
    </article>
  );
}

PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    contentPreview: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
};

export default PostPreview;
