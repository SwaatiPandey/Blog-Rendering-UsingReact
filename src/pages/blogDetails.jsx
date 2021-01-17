import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import blogUrl from "../apicalls/apicall";
import "../styles/BlogDetails.css";

class BlogDetails extends Component {
  state = {
    blog: {},
    status: "",
    blogId: "",
  };
  componentDidMount = () => {
    fetch(blogUrl + this.props.match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          blog: data.data[0],
          status: "Successful",
          blogId: data.data[0].id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidUpdate = () => {
    if (this.state.blogId !== this.props.match.params.id) {
      fetch(blogUrl + this.props.match.params.id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            blog: data.data[0],
            status: "Successful",
            blogId: data.data[0].id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div>
        <Navigation />
        {this.state.status === "Successful" ? (
          
            <div className="blogDetail1-card">
              <div className="section1">
              <div key={this.state.blog.id}>
                <div>
                  <h3>Title : {this.state.blog.title}</h3>
                  <p>Author : {this.state.blog.author}</p>
                  <img
                    className="blogDetail-image"
                    src={this.state.blog.imageUrl}
                    alt=""
                  />
                  <p>{this.state.blog.content}</p>
                </div>
              </div>
              </div>
              
              <aside>
                <h3>Links</h3>
                {this.state.blog.links.map((link, i) => {
                  return (
                    <div key={i}>
                      <Link to={`/blog/${link.id}`}>
                        <p>{link.title}</p>
                      </Link>
                    </div>
                  );
                })}
              </aside>
            </div>
        
        ) : (
          <h1>Loading</h1>
        )}
        </div>
    );
  }
}
export default BlogDetails;
