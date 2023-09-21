import "./App.css";
import Navigation from "./Navigation/navigation/navigation";
import InputLink from "./components/InputLink/InputLink";
import AppLogo from "./components/logo/AppLogo";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App  pt-7  mx-10  ">
      <ParticlesBg type="square" bg={true} />

      <Navigation />
      <AppLogo />

      <div className="flex justify-center">
        <InputLink />
      </div>
    </div>
  );
}

export default App;
