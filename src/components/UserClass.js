import React from "react";

// It is a normal JS class;
// The render method will return a piece of JSX which will be displayed on UI.

// Always use super(props) in a class constructor to pass props to React.Component.
// Without super(), this is not available and will throw an error.
// Without super(props), this.props inside the constructor is undefined.

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://google.com",
      },
    };

    console.log("ChildConstructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/knightsword1");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    // console.log("Child Component Did Mount");
  }

  componentDidUpdate() {
    // console.log("Child Component Did Update");
  }

  // When we go on a different page this unmounting will be done of current component
  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log("ChildRender");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : @sinhaayush</h2>
      </div>
    );
  }
}

export default UserClass;

// * ------ MOUNTING ------
// * Constructor is called (dummy data is put into state variables)
// * Render (with dummy data)
// *        <HTML Dummy>  (DOM is updated with dummy data)
// * Component Did Mount
// *        <API Call>
// *        <this.setState> -> State Variable is updated
// *------- UPDATE ------
//* Render(API Data)
//* <HTML (new API data)>  (DOM is updated with new data)
//* Component Did Update
//*
