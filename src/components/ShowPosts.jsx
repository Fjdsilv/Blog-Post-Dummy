import SinglePost from "./SinglePost"

const ShowPosts = ({ posts, deletePost }) => {
  return (
    <section className="main">
        {posts.length ? 
        <>
        {
            posts.map((post) => {
              return (
                  <SinglePost 
                          key={post.id} 
                          {...post}
                          deletePost={deletePost}
                  />
              )
          })
        }
        </>
        :
        <h3 style={
          {
            textAlign: "center", 
            paddingTop: "5rem", 
            color: "#76ABAE"
          }
        }>No Post here. Add a Post please!</h3>
        }
    </section>
  )
}
export default ShowPosts

