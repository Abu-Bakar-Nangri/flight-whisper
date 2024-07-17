import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = async () => {
    if (!name || !email || !phoneNo || !password || !confirmpassword) {
      toast.error('Please enter all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(phoneNo)) {
      toast.error('Phone number should start with 03 and have 11 digits');
      return;
    }

    if (password.length < 8) {
      toast.error('Password should be at least 8 characters long');
      return;
    }

    if (password !== confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const registrationData = { name, email, phoneNo, password };

      const response = await axios.post('http://localhost:3699/api/users/register', registrationData);

      if (response.status === 201) {
        toast.success('Registration successful. You can now login with your credentials');
        navigate('/login');
      } else {
        toast.error(response.data.message || 'Unknown error');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.maincontainer}>
    <div className={styles.container}>
    {loading && <div className={styles.loader}>
            <div className={styles.spinner}></div>
        </div>}
      <ToastContainer />
      <h2 className={styles.login}>Register with Email</h2>

      <div className={styles.inputGroup}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      </div>

      <div className={styles.inputGroup}>
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
          placeholder="Enter email"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Number</label>
        <input
          type="text"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value.trim())}
          placeholder="Enter phone number"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <div className={styles.passwordInput}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <span onClick={toggleShowPassword}>
            {showPassword ?  '👁️' : '🙈'}
          </span>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label>Confirm Password</label>
        <div className={styles.passwordInput}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter confirm password"
          />
          <span onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ?  '👁️' : '🙈'}
          </span>
        </div>
      </div>

      <button className={styles.registerBtn} onClick={handleRegister}>
        Register
      </button>

      <div className={styles.registerBtnContainer}>
        <span>Already have an account?</span>
        <button className={styles.loginBtn} onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
    </div>
  );
}
