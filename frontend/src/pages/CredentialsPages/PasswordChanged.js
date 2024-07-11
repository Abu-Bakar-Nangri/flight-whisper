import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './PasswordChanged.module.css'; // Import CSS Modules

const PasswordChanged = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = () => {
    // Use navigate function to navigate
    navigate('/login'); // Adjust the path as per your routing setup
  };

  return (
    <div className={styles.container}>
      <i className={`material-icons ${styles.icon}`} style={{ color: '#4F718A', fontSize: 120 }}>
        checkbox-marked-circle
      </i>
      <h2 className={styles.passwordChangedTitle}>Password changed</h2>
      <p className={styles.passwordChangedSubTitle}>
        Your password has been changed successfully
      </p>
      <button className={styles.passwordChangedbtn} onClick={handleLogin}>
        <span className={styles.passwordChangedtext}>Back to login</span>
      </button>
    </div>
  );
};

export default PasswordChanged;
