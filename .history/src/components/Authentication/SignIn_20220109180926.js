import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate , Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("../About");
    } catch (error) {
      toast.warn("Wrong Password or Email");
    }
  };

  return (
    <>
      <div className="body">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        className="toast-container"
        toastClassName="dark-toast"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className="container">
          <div className="box">
            <AiFillLock className="login-icon" />
            <p className="title">Hey, welcome back !!!</p>
            <div className="login-form">
              <input
                type="email"
                id="input-email"
                placeholder="Email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <input
                type="password"
                id="input-pass"
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
              <button onClick={login} className="sign-in-btn">
                Sign In
              </button>
              <p className="title">
                Don't have an account ? <span Link to="signup"  className="signup">Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
