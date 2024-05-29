const express = require('express');
const router = express.Router();
const { registerUser, authUser,updateUserProfile, resetPassword,deleteAccount} = require('../Controllers/userController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/updateProfile/:id', updateUserProfile);
router.post('/resetPassword/:email', resetPassword);
router.delete('/deleteAccount/:email', deleteAccount);


module.exports = router;
