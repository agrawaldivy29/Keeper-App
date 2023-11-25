import React, {useState} from "react";

function CreateArea(props) {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleContent(event) {
    setContent(event.target.value);
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={title} onChange={handleTitle} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={handleContent} />
        <button onClick={() => {
          props.addNote(title, content)
          setTitle("");
          setContent("");
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;