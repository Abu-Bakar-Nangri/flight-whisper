const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require('../Utils/generateToken')
const crypto = require('crypto');
const nodemailer = require('nodemailer');
require('dotenv').config();

let optCode=0;



// Registration Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phoneNo, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phoneNo,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});



// Login Controller
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      address: {
        street: user.address.street || '',
        city: user.address.city || '',
        province: user.address.province || '',
        postalCode: user.address.postalCode || '',
        country: user.address.country || '',
      },
      dob: user.dob,
      gender: user.gender,
      nationality: user.nationality,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});




// Update User Profile Controller
const updateUserProfile = asyncHandler(async (req,res)=>{
  const {id} = req.params;
  const updates = req.body;
  try {
    let user;
    try {
      user = await User.findById(id);
    } catch (error) {
      return res.status(500).json({ message: 'Error finding user', error: error.message });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    for (const key in updates) {
      if (key !== 'dynamicFields') {
        user[key] = updates[key];
      }
    }
    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});




// Update new Password Controller
const updateUserPassword = async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = password;

    await user.save();

    res.status(200).json({ message: 'User password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user password', error: error.message });
  }
};




// Send OPT on the Email Controller
const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const code = generateVerificationCode(4); 
    optCode = code;
    await sendVerificationMail(email, code);

    res.status(200).json({ message: 'Verification code sent to email', code });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error resetting password', error: error.message });
  }
});

const generateVerificationCode = (length) => {
  const numBytes = Math.ceil(length / 2);
  const hexString = crypto.randomBytes(numBytes).toString('hex');
  const randomNumber = parseInt(hexString, 16);
  return randomNumber.toString().padStart(length, '0').substring(0, length);
};

const sendVerificationMail = async (email, code) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'camryn.mccullough54@ethereal.email',
        pass: 'RUGPPhKJuA5jvZ9Tn1'
    }
});

  const mailOptions = {
    from: '"Maddison Foo Koch 👻" <abubakarnangri@gmail.com>',
    to: "f2020065054@umt.edu.pk",
    subject: "Password Reset Verification Code",
    text: `Your verification code is: ${code}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
    throw new Error('Error sending email');
  }
};




// Delete Account  Controller
const deleteAccount = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: 'Please provide an email.' });
    }

    const userToRemove = await User.findOne({ email });

    if (!userToRemove) {
      return res.status(404).json({ message: 'User not found.' });
    }
    await User.deleteOne({ email });

    return res.status(200).json({ message: 'User removed successfully.' });
  } catch (error) {
    console.error('Error removing user:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};




// Verify Password Controller
const verify = (otp) => {
  return otp == optCode;
};

const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const isOTPValid = verify(otp);

    if (isOTPValid) {
      res.status(200).json({ message: 'OTP is correct' });
    } else {
      res.status(400).json({ message: 'OTP is incorrect' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'An error occurred while verifying OTP' });
  }
};

module.exports = { registerUser, authUser,updateUserProfile ,resetPassword,deleteAccount,updateUserPassword,verifyOTP};
