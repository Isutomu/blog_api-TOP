import { useRef, useState } from "react";
import TextEditor from "../TextEditor/TextEditor";
import fetchAddPost from "../../utils/backend/post/fetchAddPost";
import { useNavigate } from "react-router-dom";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const [error, setError] = useState();
  const contentRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataJSON = JSON.stringify({
      title: formData.get("title"),
      image: formData.get("image"),
      tags: formData.get("tags").split(","),
      content: contentRef.current.getContent(),
    });

    const response = await fetchAddPost(formDataJSON, token);
    if (response.error) {
      setError(response.error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className={styles.main}>
      <span className={styles.error}>{error ? error : ""}</span>
      <h1 className={styles.h1}>Create a post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input type="text" name="title" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="image" className={styles.label}>
            Image (url)
          </label>
          <input type="text" name="image" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="tags" className={styles.label}>
            Tags
          </label>
          <input type="text" name="tags" className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="content" className={styles.label}>
            Post
          </label>
          <TextEditor contentRef={contentRef} />
        </div>
        <button type="submit" className={styles.button}>
          Post
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
