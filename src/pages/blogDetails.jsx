import {Component} from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/Footer.css";
import "../styles/Navigation.css";
class BlogDetails extends Component{
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
             <Navigation/>
            <div className="blog-card">
                <div className="blog-image">
                <img src="" alt=""/>
                </div>
                <div className="blog-details">
                    <p>title</p>
                    <p>Author</p>
                    <p>content</p>
                    </div>
                <aside>
                   <p> Realted links</p>
                </aside>


             </div>
             <Footer/>

         </div>
        )
    }
}
export default BlogDetails;