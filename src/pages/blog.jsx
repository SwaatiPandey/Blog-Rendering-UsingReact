import { Component } from "react";
import blogUrl from "../apicalls/apicall";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import "../styles/Blog.css";
class Blog extends Component {
  state = {
    blog: [],
  };
  componentDidMount = () => {
    fetch(blogUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ blog: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="blog">
           <Navigation/> 
           <div className="blog-container">
          
        {this.state.blog.map((blog) => {
          return (
           
            <div key={blog.id}>
          <div className="blog-card">    
            
            <h3>Title : {blog.title}</h3>
              <p>Author : {blog.author}</p>
              <img className="blog-image" src={blog.imageUrl} alt="" />
              </div>
            </div>
           
          );
        })}
         </div>
       
        {/* <div className="blog-card">
          <div className="blog-image">
            <img src="" alt="" />
          </div>
          <div className="blog-details">
            <p>title</p>
            <p>Author</p>
          </div>
        </
        div>
     */}
     <Footer/>
     </div>
    );
  }
}
export default Blog;
