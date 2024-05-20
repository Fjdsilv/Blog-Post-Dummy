import { nanoid } from "nanoid";
import { useState } from "react"
import Header from "./components/Header";
import Form from "./components/Form";
import ShowPosts from "./components/ShowPosts";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("posts", JSON.stringify(items));
}

const defaultPosts = JSON.parse(localStorage.getItem("posts") || "[]");
// const defaultPosts = JSON.parse(localStorage.getItem("posts") || "[]") ? myposts : JSON.parse(localStorage.getItem("posts"));

const App = () => {
  const [posts, setPosts] = useState(defaultPosts);

  const addPost = (name, post) => {

    const date = new Date();
        
    const addPost = {
        id: nanoid(),
        name: name,
        text: post,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };
    const newPosts = [addPost, ...posts]
    setPosts(newPosts);
    toast.success("Posted!");
    setLocalStorage(newPosts);
  }

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    toast.success("Deleted");
    setLocalStorage(newPosts);
  }

  return (
    <main>
      <ToastContainer position="top-center"/>
      <Header/>
      <ShowPosts 
        posts={posts}
        deletePost={deletePost}  
      />
      <Form addPost={addPost}/>
    </main>
  )
}
export default App


/*

[
    {
      id: nanoid(),
      name: "Felipe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus.",
      time: "4:02:04 PM 3/21/2024",
    },
    {
      id: nanoid(),
      name: "Bela Senna",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus.",
      time: "4:02:04 PM 3/21/2024",
    },
    {
      id: nanoid(),
      name: "Bruno Ferreira",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus.",
      time: "4:02:04 PM 3/21/2024",
    },
  ]

*/