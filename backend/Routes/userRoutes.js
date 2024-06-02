const express = require('express');
const router = express.Router();
const { registerUser, authUser,updateUserProfile, resetPassword,deleteAccount,updateUserPassword,verifyOTP} = require('../Controllers/userController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/updateProfile/:id', updateUserProfile);
router.post('/resetPassword/:email', resetPassword);
router.delete('/deleteAccount/:email', deleteAccount);
router.post('/updateUserPassword/:email', updateUserPassword);
router.post('/verifyOTP', verifyOTP);


module.exports = router;
