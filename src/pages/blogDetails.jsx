import { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import blogUrl from "../apicalls/apicall";
import "../styles/BlogDetails.css";
import Footer from "../components/Footer";
import NotFound from "./error";

class BlogDetails extends Component {
  state = {
    blog: [],
    status: "",
    blogId: "",
  };
  componentDidMount = () => {
    fetch(blogUrl + this.props.match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data)
          this.setState({
            blog: data.data,
            status: "Successful",
            blogId: data.data.id,
          });
        else this.setState({ status: "Successful" });
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
            blog: data.data,
            status: "Successful",
            blogId: data.data.id,
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
        {this.state.status === "" ? (
          <h1>Loading...</h1>
        ) : this.state.status === "Successful" &&
          this.state.blog.length !== 0 ? (
          <div className="blogDetails-card">
            <div className="content-container" key={this.state.blog.id}>
              <div>
                <h3>Title : {this.state.blog.title}</h3>
                <p>Author : {this.state.blog.author}</p>
                <img
                  className="blogDetais-image"
                  src={this.state.blog.imageUrl}
                  alt=""
                />
                <p>{this.state.blog.content}</p>
              </div>
            </div>
            <aside>
              <h2>Links</h2>
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
          <NotFound />
        )}
        <Footer></Footer>
      </div>
    );
  }
}
export default BlogDetails;
