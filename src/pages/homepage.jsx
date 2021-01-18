import { Component } from "react";
import Typewriter from "typewriter-effect";
import "../styles/Home.css";

class HomePage extends Component {
  render() {
    return (
      <div>
          <Typewriter
            options={{
              strings: [
                "Welcome",
                "This is our landing page!!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
      </div>
    );
  }
}

export default HomePage;
