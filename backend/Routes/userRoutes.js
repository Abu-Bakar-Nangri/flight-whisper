const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { registerUser, authUser,updateUserProfile, resetPassword,deleteAccount,updateUserPassword,verifyOTP,UserFeedback} = require('../Controllers/userController');


const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5, 
    message: { message: 'Too many login attempts, please try again later.' },
});

const registerLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5, 
    message: { message: 'Too many register attempts, please try again later.' },
});

const ResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, 
    message: { message: 'Too many reset attempts, please try again later.' },
});



router.post('/register',registerLimiter, registerUser);
router.post('/login',loginLimiter, authUser);
router.post('/updateProfile/:id', updateUserProfile);
router.post('/resetPassword/:email',ResetLimiter, resetPassword);
router.delete('/deleteAccount/:email', deleteAccount);
router.post('/updateUserPassword/:email', updateUserPassword);
router.post('/verifyOTP', verifyOTP);
router.post('/UserFeedback', UserFeedback);


module.exports = router;
