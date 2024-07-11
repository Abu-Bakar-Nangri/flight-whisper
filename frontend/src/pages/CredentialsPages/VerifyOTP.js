import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './VerifyOTP.module.css'; // Import CSS Modules

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }

    if (!value && index > 0 && newOtp[index - 1] !== "") {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const otpString = otp.join("");
      const otpIntegers = parseInt(otpString, 10);
  
      const response = await axios.post('http://192.168.1.72:3699/api/users/verifyOTP', { otp: otpIntegers });
  
      if (response.status === 200) { 
        navigate('/reset-password', { state: { email } });
      } else {
        toast.error('OTP is incorrect');
      }
    } catch (error) {
      toast.error('An error occurred during OTP verification');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`http://192.168.1.72:3699/api/users/resetPassword/${email}`);
      
      if (response.status === 200) {
        toast.success('OTP has been resent successfully');
      } else {
        toast.error('Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred while resending OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <div className={styles.loader}>Loading...</div>}
      <h2 className={styles.verifyOTPTitle}>Please check your email</h2>
      <p className={styles.verifyOTPSubTitle}>
        We've sent a code to <span className={styles.verifyOTPEmail}>{email}</span>
      </p>
      <ToastContainer />
      <div className={styles.inputContainer}>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            className={styles.input}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <button className={styles.verifybtn} onClick={handleVerifyOTP}>
        Verify
      </button>
      <div className={styles.sendCodeContainer}>
        <button className={styles.sendCodeButton} onClick={handleResendCode}>
          Send code again
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
