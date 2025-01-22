import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyTest() {
  const editorRef = useRef("test");

  function post(e) {
    e.preventDefault();

    const content = editorRef.current.getContent();
    const image = "fasfas";
    const title = "sfasfasfasfqwe";
    const userId = "74e0af7a-a026-4fae-80ff-606742687aae";
    const tags = ["lol", "pop"];

    const postInfo = JSON.stringify({ content, image, title, userId, tags });
    console.log(postInfo);

    fetch("http://localhost:8010/proxy/posts", {
      mode: "cors",
      method: "POST",
      body: postInfo,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={post}>
      <input type="text" name="image" placeholder="image" />
      <input type="text" name="title" placeholder="title" />
      <Editor
        apiKey={import.meta.env.VITE_API_TINY_MCE}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
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
      <button type="submit">Log editor content</button>
    </form>
  );
}

export default TinyTest;
