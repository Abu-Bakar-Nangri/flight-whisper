const express = require('express');
const router = express.Router();
const { registerUser, authUser,updateUserProfile } = require('../Controllers/userController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/updateProfile/:id', updateUserProfile);

module.exports = router;
