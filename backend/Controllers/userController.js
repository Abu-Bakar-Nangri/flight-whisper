const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../utils/generateToken");


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

module.exports = { registerUser, authUser,updateUserProfile };
