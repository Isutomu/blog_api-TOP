import Header from "../../components/Header/Header";
import PostsCardsWrapper from "../../components/PostsCardsWrapper/PostsCardsWrapper";
import Footer from "../../components/Footer/Footer";
import usePostData from "../../utils/customHooks/usePostData";
import styles from "./SearchResultPage.module.css";
import { useParams } from "react-router-dom";

function SearchResultPage() {
  const { tagName } = useParams();
  // This URL returns an array of posts previews
  const { data, error, loading } = usePostData(
    `${import.meta.env.VITE_API_URL}/tags/${tagName}`
  );

  let mainContent;
  let dataAvailable = true;
  if (error) {
    dataAvailable = false;
    mainContent = <span>{error.message}</span>;
  }
  if (loading) {
    dataAvailable = false;
    mainContent = <span>loading</span>;
  }
  if (!data) {
    dataAvailable = false;
    mainContent = <span>no posts</span>;
  }
  console.log(data);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.recentTitle}>
          Searching posts with tag: {tagName}
        </h2>
        {dataAvailable ? <PostsCardsWrapper data={data} /> : mainContent}
      </main>
      <Footer />
    </>
  );
}

export default SearchResultPage;
