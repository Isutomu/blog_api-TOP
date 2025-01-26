import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

function TextEditor({ contentRef, initialText }) {
  return (
    <Editor
      apiKey={import.meta.env.VITE_API_TINY_MCE}
      onInit={(_evt, editor) => (contentRef.current = editor)}
      initialValue={initialText}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}

TextEditor.propTypes = {
  contentRef: PropTypes.shape({
    current: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      .isRequired,
  }),
  initialText: PropTypes.string.isRequired,
};

export default TextEditor;
