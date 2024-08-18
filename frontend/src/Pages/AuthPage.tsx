import React from "react";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">{toggle ? "Sign Up" : "Sign In"}</h1>
      <button
        onClick={() => setToggle(!toggle)}
        className="mb-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
      >
        {toggle ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
      <AuthForm type={toggle ? "register" : "login"} />
    </div>
  );
};

export default AuthPage;
