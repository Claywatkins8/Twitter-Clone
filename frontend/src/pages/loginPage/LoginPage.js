import React, { useState } from "react";
import "./LoginPage.css";
import Login from "../../components/loginPage/Login";
import AuthModel from "../../models/auth";
import { userState } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
// import { useMutation, gql } from "@apollo/client";

// const SigninMutation = gql`
//   mutation SigninUserMutation(
//     $signinUserEmail: String!
//     $signinUserPassword: String!
//   ) {
//     signinUser(email: $signinUserEmail, password: $signinUserPassword)
//   }
// `;

const LoginPage = ({ history }) => {
  const setUser = useSetRecoilState(userState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, { loading, error }] = useMutation(SigninMutation);

  const submitHandler = async (e) => {
    // await login({
    //   variables: {
    //     email: email,
    //     password: password,
    //   },
    // });
    e.preventDefault();
    AuthModel.login({ email, password }).then((json) => {
      localStorage.setItem("uid", json.token);
      localStorage.setItem("userinfo", JSON.stringify(json));
      if (json.status === 200) {
        // FIXME may need selector to get just user
        console.log(json, "login");
        setUser(json);
        history.push("/feed");
      } else {
        history.push("/");
      }
    });
  };
  return (
    <Login
      submitHandler={submitHandler}
      email={(e) => setEmail(e.target.value)}
      emailValue={email}
      password={(e) => setPassword(e.target.value)}
    />
  );
};

export default LoginPage;
