import DOMPurify from "dompurify";
import PropTypes from "prop-types";

function SafeHTML({ unsafeHTML }) {
  const sanitizedHTML = DOMPurify.sanitize(unsafeHTML);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>;
}

SafeHTML.propTypes = {
  unsafeHTML: PropTypes.string.isRequired,
};

export default SafeHTML;
