import { MdDelete } from "react-icons/md";
const SinglePost = ({ id, name, text, time , deletePost }) => {
  return (
    <article>
        <h2>{name}</h2>
        <p>{text}</p>
        <p className="date">{time}</p>
        <div>
          <button
              type="button"
              onClick={() => deletePost(id)}
          >
             <MdDelete/>
          </button>
        </div>
    </article>
  )
}
export default SinglePost