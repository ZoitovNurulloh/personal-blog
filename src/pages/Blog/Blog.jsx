import Articles from "../../components/Articles/Articles";
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container container-main">
        <div className="blog-wrapper">
          <h2 className="blog-title">
            My Articles
          </h2>
          <p className="blog__info">Below are all my recent blog posts. Click on any title to read the full article.</p>
          <Articles detailed={true}/>
        </div>
      </div>
    </section>
  )
}

export default Blog