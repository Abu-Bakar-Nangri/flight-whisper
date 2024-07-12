import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgetPassword = async () => {
    if (!email) {
      toast.error("Please enter the email to search");
      return;
    }
  
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:3699/api/users/resetPassword/${email}`);
      
      if (response.status === 200) {
        navigate("/verify-otp", { state: { code: response.data.code, email } });
      } else {
        toast.error("Failed to initiate password reset process");
      }
    } catch (error) {
      toast.error( error.response.data.messag|| "Failed to send reset password request");
    } finally {
      setLoading(false)
    }
  };


  return (
    <div className={styles.maincontainer}>
    <div className={styles.container}>
      {loading && <div className={styles.loader}>
            <div className={styles.spinner}></div>
        </div>}
      <ToastContainer />
      <h2 className={styles.forgetTitle}>Forgot password?</h2>
      <p className={styles.forgetSubTitle}>
        Don't worry! It happens. Please enter the email associated with your account.
      </p>
      <div className={styles.emailview}>
        <label className={styles.email}>Email address</label>
        <input
          className={styles.enteremail}
          value={email}
          onChange={e => setEmail(e.target.value.trim())}
          placeholder="Enter your email address"
          autoCapitalize="none"
        />
      </div>
      <button className={styles.sendCodebtn} onClick={handleForgetPassword}>
        Send code
      </button>
      <div className={styles.rememberBtnContainer}>
        <p className={styles.rememberText}>Remember password?</p>
        <Link className={styles.loginText} to={'/login'}>Log in</Link>
      </div>

    </div>
    </div>
  );
};

export default ForgetPassword;
