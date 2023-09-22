import "./App.css";
import Navigation from "./Navigation/navigation/navigation";
import InputLink from "./components/InputLink/InputLink";
import AppLogo from "./components/logo/AppLogo";
import ParticlesBg from "particles-bg";
import { React, Component } from "react";

const PAT = "1b4b816f8bc8426399c7fdd2b54ac45b";
const USER_ID = "qrs94vsjexh2";
const APP_ID = "my-first-application-faceRecognx";
const MODEL_ID = "face-detection";
const IMAGE_URL = "";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

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

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

// fetch(
//   "https://api.clarifai.com/v2/models/" +
//     MODEL_ID +
//     "/versions/" +
//     requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      IMAGE_URL:
        "https://i.itworldcanada.com/wp-content/uploads/2020/06/GettyImages-1148006029.jpg",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmitBtn = () => {
    this.setState({ IMAGE_URL: this.state.input });
    console.log("click");
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App  pt-7  mx-10  ">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <AppLogo />
        <div className="flex justify-center">
          <InputLink
            onInputChange={this.onInputChange}
            onSubmitBtn={this.onSubmitBtn}
            IMAGE_URL={this.state.IMAGE_URL}
          />
        </div>
      </div>
    );
  }
}

export default App;
