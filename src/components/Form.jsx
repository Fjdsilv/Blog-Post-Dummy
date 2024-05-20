import { useState } from "react";
import { toast } from "react-toastify";


const Form = ({ addPost }) => {
    const [name, setName] = useState("");
    const [textPost, setTextPost] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || textPost === "") {
            toast.error("Please enter a correct value!");
            return
        }
        addPost(name, textPost);
        setName("");
        setTextPost("");
    }

  return (
    <section className="main">
        <form onSubmit={handleSubmit}>
            <label htmlFor="textPost">Post:</label>
            <textarea   
                        id="textPost"
                        value={textPost}
                        onChange={(e) => setTextPost(e.target.value)}
                        maxLength={50}
                      />

            <label htmlFor="textName">Name:</label>
            <input 
                        id="textName"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
            <button
                type="submit"
                className="addPost"
            >
            Add Post
            </button>
        </form>
    </section>
  )
}
export default Form

