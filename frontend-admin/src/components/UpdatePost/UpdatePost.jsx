import { useRef, useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./UpdatePost.module.css";
import fetchUpdatePost from "../../utils/backend/post/fetchUpdatePost";
import usePostData from "../../utils/customHooks/usePostData";

const UpdatePost = () => {
  const params = useParams();
  const [error, setError] = useState();
  const titleRef = useRef("");
  const imageRef = useRef("");
  const tagsRef = useRef("");
  const contentRef = useRef("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // This URL returns an array of posts previews
  const { data, err, loading } = usePostData(
    `${import.meta.env.VITE_API_URL}/posts/${params.postId}`
  );

  if (error) {
    return <span>{error.message}</span>;
  }
  if (loading) {
    return <span>loading</span>;
  }
  if (!data) {
    return <span>no post with this id</span>;
  }
  titleRef.current = data.title;
  imageRef.current = data.image;
  tagsRef.current = data.tags.map((tag) => tag.name).join(",");
  contentRef.current = data.content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataJSON = JSON.stringify({
      title: formData.get("title"),
      image: formData.get("image"),
      tags: formData.get("tags").split(","),
      content: contentRef.current.getContent(),
    });

    const response = await fetchUpdatePost(formDataJSON, token, params.postId);
    if (response.error) {
      setError(response.error.message);
      return;
    }
    console.log(response.data);
    navigate("/dashboard");
  };

  return (
    <main className={styles.main}>
      <span className={styles.error}>{error ? error : ""}</span>
      <span className={styles.error}>{err ? err : ""}</span>
      <h1 className={styles.h1}>Create a post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            className={styles.input}
            defaultValue={titleRef.current}
            onChange={({ target }) => (titleRef.current = target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="image" className={styles.label}>
            Image (url)
          </label>
          <input
            type="text"
            name="image"
            className={styles.input}
            defaultValue={imageRef.current}
            onChange={({ target }) => (imageRef.current = target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="tags" className={styles.label}>
            Tags
          </label>
          <input
            type="text"
            name="tags"
            className={styles.input}
            defaultValue={tagsRef.current}
            onChange={({ target }) => (tagsRef.current = target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="content" className={styles.label}>
            Post
          </label>
          <TextEditor
            contentRef={contentRef}
            initialText={contentRef.current}
          />
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </main>
  );
};

export default UpdatePost;
