import PropTypes from "prop-types";
import styles from "./TagsAssembler.module.css";
import { Link } from "react-router-dom";

function TagsAssembler({ tags }) {
  return (
    <div className={styles.tagsAssembler}>
      {tags.map((tag, index) => (
        <Link className={styles.tag} key={index} to={`/tags/${tag}`}>
          {tag}
        </Link>
      ))}
    </div>
  );
}

TagsAssembler.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagsAssembler;
