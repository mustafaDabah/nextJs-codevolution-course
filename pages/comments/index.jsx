import { useState } from "react";

function PageComments() {
  const [commentsData, setCommentsData] = useState([]);
  const [comments, setComments] = useState("");

  async function fetchComments() {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setCommentsData(data);
  }


  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comments }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async(id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data)
    fetchComments()
  };

  return (
    <div>
      <input type="text" onChange={(e) => setComments(e.target.value)} />
      <button onClick={submitComment}>post comment</button>
      <button onClick={fetchComments}>fetch comments</button>

      {commentsData.map((item) => (
        <div key={item.id}>
          <h2>title - {item.title}</h2>
          <button onClick={() => deleteComment(item.id)}>delete btn</button>
        </div>
      ))}
    </div>
  );
}

export default PageComments;
