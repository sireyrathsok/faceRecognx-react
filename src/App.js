import "./App.css";
import Navigation from "./Navigation/navigation/navigation";
import InputLink from "./components/InputLink/InputLink";
import AppLogo from "./components/logo/AppLogo";
import ParticlesBg from "particles-bg";
import { React, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      urlLink: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmitBtn = () => {
    console.log("click");
    this.setState();
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
          />
        </div>
      </div>
    );
  }
}

export default App;
