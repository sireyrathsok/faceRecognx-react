import React from "react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      emailOnSignIn: "",
      passOnSignIn: "",
    };
  }
  onEmailChanged = (event) => {
    this.setState({ emailOnSignIn: event.target.value });
  };

  onPasswordChanged = (event) => {
    this.setState({ passOnSignIn: event.target.value });
  };

  onSubmitClicked = () => {
    fetch("http://localhost:3001/signin", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: this.state.emailOnSignIn,
        password: this.state.passOnSignIn,
      }), // body data type must match "Content-Type" header
    });
    this.props.onSignInClicked("home");
    // parses JSON response into native JavaScript objects
  };

  render() {
    const { userDontHaveAcc } = this.props;

    return (
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Sign In
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={this.onEmailChanged}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChanged}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  {/* <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type="button"
                  onClick={this.onSubmitClicked}
                  className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account yet?{" "}
                  <div
                    onClick={userDontHaveAcc}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignIn;
