import { Component } from "react";
import { GlobalCosumer } from "./Context";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>This is profile page </p>
        <p> Welcome {this.props.state.name} </p>
        <p> {this.props.state.email} </p>
      </div>
    );
  }
}

export default GlobalCosumer(Profile);
