import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PostPreview.module.css";
import datetimeShort from "../../utils/dataFormatters/datetimeShort";

function generateFooterText(post) {
  const createdAt = datetimeShort(post.createdAt);
  const updatedAt = datetimeShort(post.updatedAt);

  const tags = post.tags.join(" ");

  const didUpdate = createdAt !== updatedAt;
  return `${createdAt}   •   ${tags}${
    didUpdate ? `   •   last update ${updatedAt}` : ""
  }`;
}

function PostPreview({ post }) {
  const footer = generateFooterText(post);

  return (
    <article className={styles.postArticle}>
      <Link className={styles.postImageLink} to={`/posts/${post.id}`}>
        <img className={styles.postImage} src={post.image} alt="" />
      </Link>
      <div className={styles.postPreviewContent}>
        <Link to={`/posts/${post.id}`}>
          <header>
            <h3 className={styles.postTitle}>{post.title}</h3>
          </header>{" "}
          <p className={styles.postPreviewText}>{post.contentPreview}</p>
        </Link>
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    contentPreview: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }),
};

export default PostPreview;
