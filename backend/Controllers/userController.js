const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../utils/generateToken");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
require('dotenv').config();


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

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});




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



const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const code = generateVerificationCode(); // Generate verification code

    await sendVerificationMail(email, code); // Send verification email

    res.status(200).json({ message: 'Verification code sent to email', code });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error resetting password', error: error.message });
  }
});

// Function to generate verification code
const generateVerificationCode = () => {
  return crypto.randomBytes(4).toString('hex'); // Generate a readable verification code
};

// Function to send verification email
const sendVerificationMail = async (email, code) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 875,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'abubakarnangri@gmail.com',
      pass: '12345678',
    },
  });

  const mailOptions = {
    from: 'abubakarnangri@gmail.com',
    to: email,
    subject: "Password Reset Verification Code",
    text: `Your verification code is: ${code}`, // Plain text body
    // html: `<p>Your verification code is: <strong>${code}</strong></p>`, // Uncomment if you want to send HTML content
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
    throw new Error('Error sending email');
  }
};



const deleteAccount = async (req, res) => {
  try {
    const { email } = req.params;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: 'Please provide an email.' });
    }

    // Find the user document in the database
    const userToRemove = await User.findOne({ email });

    // Check if user is found
    if (!userToRemove) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Remove the user from the database
    await User.deleteOne({ email });

    return res.status(200).json({ message: 'User removed successfully.' });
  } catch (error) {
    console.error('Error removing user:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};




module.exports = { registerUser, authUser,updateUserProfile ,resetPassword,deleteAccount};
