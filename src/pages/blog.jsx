import {Component} from "react";
class Blog extends Component{
    render(){
        state ={
            blog:[],
        };
        componentDidMount = () => {
            fetch(this.state.url)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                this.setState({ employees: data });
              })
              .catch((err) => {
                console.log(err);
              });
          };
        return(
         <div className="blog-container">
            <div className="blog-card">
                <div className="blog-image">
                <img src="" alt=""/>
                </div>
                <div className="blog-details">
                    <p>title</p>
                    <p>Author</p>

                </div>

             </div>

         </div>
        )
    }
}
export default Blog;