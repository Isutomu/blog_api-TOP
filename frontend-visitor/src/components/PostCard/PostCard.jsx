import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PostCard.module.css";
import datetimeShort from "../../utils/dataFormatters/datetimeShort";
import TagsAssembler from "../TagsAssembler/TagsAssembler";

function BulletPoint() {
  return <span className={styles.bulletPoint}>•</span>;
}

function PostCard({ post }) {
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

        <footer className={styles.postPreviewFooter}>
          <time dateTime={styles.createdAt}>
            {datetimeShort(post.createdAt)}
          </time>
          <BulletPoint />
          <TagsAssembler tags={post.tags} />
          {styles.updatedAt ? (
            <>
              <BulletPoint />
              <time dateTime={styles.updatedAt}>
                {datetimeShort(post.updatedAt)}
              </time>
            </>
          ) : null}
        </footer>
      </div>
    </article>
  );
}

PostCard.propTypes = {
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

export default PostCard;
