import { Component, createContext } from "react";

export const RootContext = createContext();
const Provider = RootContext.Provider;

//Provider
const GlobalProvider = (Childern) => {
  return class ParentComp extends Component {
    state = {
      name: "anonymous",
      email: "your@maill.com"
    };

    changeGlobalState = (action) => {
      console.log(action);

      if (action.type === "SET_NAME") {
        // console.log(action.val);

        return this.setState({
          ...this.state,
          name: action.valInput
        });
      }

      if (action.type === "SET_EMAIL") {
        return this.setState({
          ...this.state,
          email: action.valInput
        });
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.changeGlobalState
          }}
        >
          <Childern {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

//Cosumer
const Cosumer = RootContext.Consumer;
export const GlobalCosumer = (Childern) => {
  return class ParentCosumer extends Component {
    render() {
      return (
        <Cosumer>
          {(value) => {
            return <Childern {...this.props} {...value} />;
          }}
        </Cosumer>
      );
    }
  };
};
