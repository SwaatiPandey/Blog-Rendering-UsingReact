// import { Component } from "react";
// import Footer from "../components/Footer";
// import Navigation from "../components/Navigation";
// import blogUrl from "../apicalls/apicall";
// import "../styles/Footer.css";
// import "../styles/Navigation.css";

// class BlogDetails extends Component {
//   state = {
//     blog: [],
//   };
//   componentDidMount = () => {
//     // fetch(blogUrl+id)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       this.setState({ employees: data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   };
//   render() {
//   return (
//       <div className="blog-container">
//         <Navigation />
//         <div className="blog-card">
//           <div className="blog-image">
//             <img src="" alt="" />
//           </div>
//           <div className="blog-details">
//             <p>title</p>
//             <p>Author</p>
//             <p>content</p>
//           </div>
//           <aside>
//             <p> Realted links</p>
//           </aside>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }
// export default BlogDetails;
