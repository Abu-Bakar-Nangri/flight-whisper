import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ResetPassword.module.css'; // Import CSS Modules
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = ({ navigation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      toast.error('Please fill out all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Password not match');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`http://localhost:3699/api/users/updateUserPassword/${email}`, {
        password,
      });

      if (response.status === 200) {
        toast.success('Update was successful');
        navigate('/password-changed');
      } else {
        toast.error('Update failed');
      }
    } catch (error) {
      toast.error('An error occurred during the update');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.maincontainer}>
    <div className={styles.container}>
            {loading && <div className={styles.loader}>
            <div className={styles.spinner}></div>
        </div>}
      <h2 className={styles.resetTitle}>Reset password</h2>
      <p className={styles.resetSubTitle}>Please type something you'll remember</p>
      <ToastContainer />
      <div className={styles.passwordview}>
        <p className={styles.password}>New password</p>
        <div className={styles.passwordInputview}>
          <input
            type={showNewPassword ? 'text' : 'password'}
            className={styles.enterpassword}
            placeholder="Must be 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`material-icons ${styles.icon}`}
            onClick={toggleShowNewPassword}
            style={{ cursor: 'pointer' }}
          >
            {showNewPassword ? "👁️" : "🙈"}
          </i>
        </div>
      </div>
      <div className={styles.passwordview}>
        <p className={styles.password}>Confirm new password</p>
        <div className={styles.passwordInputview}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className={styles.enterpassword}
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i
            className={`material-icons ${styles.icon}`}
            onClick={toggleShowConfirmPassword}
            style={{ cursor: 'pointer' }}
          >
            {showConfirmPassword ? "👁️" : "🙈"}
          </i>
        </div>
      </div>
      <button className={styles.resetbtn} onClick={handleResetPassword}>
        Reset password
      </button>
    </div>
    </div>
  );
};

export default ResetPassword;
