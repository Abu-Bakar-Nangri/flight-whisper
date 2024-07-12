import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './PasswordChanged.module.css'; // Import CSS Modules

const PasswordChanged = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.maincontainer}>
    <div className={styles.container}>
      <i className={` ${styles.icon}`} style={{ color: '#4F718A', fontSize: 120 }}>
      ✔
      </i>
      <h2 className={styles.passwordChangedTitle}>Password changed</h2>
      <p className={styles.passwordChangedSubTitle}>
        Your password has been changed successfully
      </p>
      <button className={styles.passwordChangedbtn} onClick={handleLogin}>
        <span className={styles.passwordChangedtext}>Back to login</span>
      </button>
    </div>
    </div>
  );
};

export default PasswordChanged;
