import { FaRegShareSquare } from "react-icons/fa";
import PropTypes from "prop-types";
import { RWebShare } from "react-web-share";
import usePostData from "../../utils/customHooks/usePostData";
import datetimeShort from "../../utils/dataFormatters/datetimeShort";
import TagsAssembler from "../TagsAssembler/TagsAssembler";
import styles from "./PostFullView.module.css";
import { useLocation } from "react-router-dom";

function PostFull({ postId }) {
  // This URL returns an object with the post information
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL_POSTS}/${postId}`
  );
  const location = useLocation();

  if (error) {
    return <span>{error.message}</span>;
  }

  if (loading) {
    return <span>Loading</span>;
  }

  if (!data) {
    return <span>No data!</span>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <time className={styles.date} dateTime={data.createdAt}>
            {datetimeShort(data.createdAt)}
          </time>
          <div className={styles.tags}>
            <TagsAssembler tags={data.tags} />
          </div>
        </div>
        <RWebShare
          data={{
            text: data.title,
            url: location.pathname,
            title: "Isutomu Naruto",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className={styles.share}>
            <FaRegShareSquare size="1.25rem" />
          </button>
        </RWebShare>
      </header>
      <article>
        <img className={styles.image} src={data.image} alt="" />
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.textContent}>{data.content}</div>
      </article>
    </main>
  );
}

PostFull.propTypes = {
  postId: PropTypes.string.isRequired,
};

// PostPreview.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     updatedAt: PropTypes.string.isRequired,
//     tags: PropTypes.array.isRequired,
//   }),
// };

export default PostFull;
