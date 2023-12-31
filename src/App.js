import "./App.css";
import InputLink from "./components/InputLink/InputLink";

import ParticlesBg from "particles-bg";
import { React, Component } from "react";
import SignIn from "./components/SignIn form/SignIn";
import Register from "./components/Register/Register";

import NavBar from "./components/Navigation/NavBar";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////
const returnClarifiaRequestOption = (
  imgUrl = "https://i.itworldcanada.com/wp-content/uploads/2020/06/GettyImages-1148006029.jpg"
) => {
  const PAT = "1b4b816f8bc8426399c7fdd2b54ac45b";
  const USER_ID = "qrs94vsjexh2";
  const APP_ID = "my-first-application-faceRecognx";

  const IMAGE_URL = imgUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl:
        "https://i.itworldcanada.com/wp-content/uploads/2020/06/GettyImages-1148006029.jpg",
      route: "signIn",
      haveAcc: "true",
      userSignedIn: "yes",
      user: {
        id: "",
        username: "",
        email: "",
        password: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (userInfo) => {
    this.setState({
      user: {
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        entries: 0,
        joined: userInfo.joined,
      },
    });
  };

  switchRouteToSignIn = () => {
    this.setState({ route: "signIn", haveAcc: "yes" });
  };

  switchRouteToRegister = () => {
    this.setState({ haveAcc: "false" });
  };

  switchRouteToRoot = () => {
    this.setState({ route: "home" });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmitBtn = () => {
    this.setState({ imgUrl: this.state.input });
    console.log("click");

    fetch(
      "https://api.clarifai.com/v2/models/" +
        "celebrity-face-detection" +
        "/outputs",
      returnClarifiaRequestOption(this.state.input)
    )
      .then((response) => console.log("response", response.json()))
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App  pt-7  mx-10  ">
        <ParticlesBg type="circle" bg={true} />
        {this.state.route === "signIn" ? (
          this.state.haveAcc === "false" ? (
            <Register
              loadUser={this.loadUser}
              switchRouteToSignIn={this.switchRouteToSignIn}
              changeRoute={this.switchRouteToRoot}
            />
          ) : (
            // onSignInClicked={this.onSignInClickedAndRegisterBtnClicked}
            // userDontHaveAcc={this.userDontHaveAcc}

            <SignIn
              switchRouteToRegister={this.switchRouteToRegister}
              switchRouteToRoot={this.switchRouteToRoot}
            />
          )
        ) : (
          <div>
            <NavBar switchRouteToSignIn={this.switchRouteToSignIn} />
            <div className="flex justify-center">
              <InputLink
                onInputChange={this.onInputChange}
                onSubmitBtn={this.onSubmitBtn}
                imgUrl={this.state.imgUrl}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

//ressponse.outputs[0].data.regions[0].data.concepts
