import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:3000/questions/all";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return console.log("No Posts");

  return (
    <div>
        {}
        <h1>Api Test Componenet</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
    
  );
}