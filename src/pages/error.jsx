import { Component } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/Home.css";
class  Error extends Component {
    render(){
   
  return (
    <div>
      <Navigation />
      <div className="main-div">
        <p>ERROR 404!!</p>
        <p>Page Not Found</p>
      </div>
      <Footer />
    </div>
    );
}
}

export default Error;