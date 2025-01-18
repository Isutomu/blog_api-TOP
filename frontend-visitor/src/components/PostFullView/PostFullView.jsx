import PropTypes from "prop-types";
import usePostData from "../../utils/customHooks/usePostData";
import datetimeShort from "../../utils/dataFormatters/datetimeShort";
import TagsAssembler from "../TagsAssembler/TagsAssembler";
import styles from "./PostFullView.module.css";
import SafeHTML from "../SafeHTML/SafeHTML";
import ShareButton from "../ShareButton/ShareButton";

function PostFull({ postId }) {
  // This URL returns an object with the post information
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL_POSTS}/${postId}`
  );

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
        <ShareButton postTitle={data.title} />
      </header>
      <article>
        <img className={styles.image} src={data.image} alt="" />
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.textContent}>
          <SafeHTML unsafeHTML={data.content} />
        </div>
      </article>
    </main>
  );
}

PostFull.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostFull;
