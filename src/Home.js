import { Component } from "react";
import { GlobalCosumer } from "./Context";

class Home extends Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = (e) => {
    // console.log("ID: ", e.target.id);
    // console.log("Value: ", e.target.value);

    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSetData = async (e) => {
    console.log(this.state);
    console.log(e);
    await e({ type: "SET_NAME", valInput: this.state.name });
    await e({ type: "SET_EMAIL", valInput: this.state.email });
  };

  render() {
    // console.log(this.props);

    return (
      <div>
        <h1>Home</h1>
        <p>This is home page </p>
        <div>
          <div>
            <label> set name </label>
            <input
              type="text"
              id="name"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label> set email </label>
            <input
              type="email"
              id="email"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button onClick={() => this.handleSetData(this.props.dispatch)}>
            {" "}
            save{" "}
          </button>
        </div>
      </div>
    );
  }
}
export default GlobalCosumer(Home);
