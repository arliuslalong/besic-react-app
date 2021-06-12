import { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
 
// const App = () => {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h3>Welcome Arlius </h3>
//     </>
//   );
// }

class App extends Component{
  render(){
    const fullName = "Arlius";
    return(
      <>
      <h1>Hello World</h1>
      <Welcome />
      <Welcome />
    </>
    );
  }
}

export default App;
