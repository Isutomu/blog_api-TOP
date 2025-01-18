import { FaRegShareSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { RWebShare } from "react-web-share";
import PropTypes from "prop-types";
import styles from "./ShareButton.module.css";

function ShareButton({ postTitle }) {
  const location = useLocation();

  return (
    <RWebShare
      data={{
        text: postTitle,
        url: location.pathname,
        title: "Isutomu Naruto",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <button className={styles.share}>
        <FaRegShareSquare size="1.25rem" />
      </button>
    </RWebShare>
  );
}

ShareButton.propTypes = {
  postTitle: PropTypes.string.isRequired,
};

export default ShareButton;
