import { Component} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blogDetails";
import Home from "../pages/home"

class Router extends Component {
    render() {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/blog" exact component={Blog} />
              <Route path="/blogdetails" exact component={BlogDetails} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
  export default Router