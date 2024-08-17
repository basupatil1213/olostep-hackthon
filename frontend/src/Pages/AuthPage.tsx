import React from "react";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Sign in" : "Sign up"}</button>
            <AuthForm type={toggle ? "register" : "login"} />
        </>
    )
};

export default AuthPage;
