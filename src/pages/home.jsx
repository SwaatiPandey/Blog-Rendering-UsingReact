import { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Sample from "../pages/homepage";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-div">
          <Sample className="para"/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
