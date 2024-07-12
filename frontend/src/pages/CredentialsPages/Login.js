import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://192.168.1.72:3699/api/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success("Login Successful. Welcome to your dashboard");
        navigate("/");
        setEmail("");
        setPassword("");
      } else {
        toast.error(response.data?.message || "Unknown error");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data?.message || "Unknown server error");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An error occurred while logging in");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        {loading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}
        <ToastContainer />

        <h2 className={styles.login}>Log In</h2>
        <div className={styles.emailview}>
          <label className={styles.email}>Email address or number</label>
          <input
            className={styles.enteremail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email or number"
            autoCapitalize="none"
          />
        </div>
        <div className={styles.passwordview}>
          <label className={styles.password}>Password</label>
          <div className={styles.passwordInputview}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className={styles.enterpassword}
              placeholder="Enter password"
            />
            <span className={styles.icon} onClick={toggleShowPassword}>
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>
        <div className={styles.forgetpasssword}>
          <button
            className={styles.forgetpasswordbtn}
            onClick={handleForgetPassword}
          >
            Forgot Password?
          </button>
        </div>
        <button className={styles.loginbtn} onClick={handleLogin}>
          Log in
        </button>
        <div className={styles.registerBtnContainer}>
          <p className={styles.registerText}>Don't have an account?</p>
          <Link className={styles.signUpText} to={"/register"}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
