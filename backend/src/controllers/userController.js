// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // ==========================
// // Generate JWT token
// // ==========================
// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d", // token valid for 7 days
//   });
// };

// // ==========================
// // Register a new user
// // ==========================
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password, // hashed by schema pre-save
//       role: role || "user",
//     });

//     // Generate token
//     const token = generateToken(user._id);

//     res.status(201).json({
//       message: "User registered successfully",
//       token, // send token
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ==========================
// // Login user
// // ==========================
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // Check password
//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Generate token
//     const token = generateToken(user._id);

//     res.status(200).json({
//       message: "Login successful",
//       token, // send token
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ==========================
// // Get all users (admin only)
// // ==========================
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ==========================
// // Delete user by ID (admin only)
// // ==========================
// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     await user.remove();
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };





// // ===== FORGOT PASSWORD =====
// export const forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "No user with that email" });

//     // Generate token
//     const resetToken = crypto.randomBytes(32).toString("hex");
//     user.resetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
//     user.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // 10 min expiry
//     await user.save();

//     // Send email
//     const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
//     const message = `
//       <h1>Password Reset Request</h1>
//       <p>Click below to reset your password:</p>
//       <a href="${resetUrl}" target="_blank">${resetUrl}</a>
//     `;

//     await sendEmail({
//       to: user.email,
//       subject: "Password Reset",
//       html: message,
//     });

//     res.status(200).json({ message: "Reset email sent" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Email could not be sent" });
//   }
// };

// // ===== RESET PASSWORD =====
// export const resetPassword = async (req, res) => {
//   const resetToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

//   try {
//     const user = await User.findOne({
//       resetToken,
//       resetTokenExpiry: { $gt: Date.now() },
//     });

//     if (!user) return res.status(400).json({ message: "Invalid or expired token" });

//     user.password = req.body.password;
//     user.resetToken = undefined;
//     user.resetTokenExpiry = undefined;

//     await user.save();

//     res.status(200).json({ message: "Password reset successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };




import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sendEmail from "../utils/sendEmails.js";

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const user = await User.create({
      name,
      email,
      password, // hashed by schema
      role: role || "user",
    });

    const token = generateToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Forgot password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "No user with that email" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const message = `
      <h1>Password Reset Request</h1>
      <p>Click below to reset your password:</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
    `;

    await sendEmail({
      to: user.email,
      subject: "Password Reset",
      html: message,
    });

    res.status(200).json({ message: "Reset email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Email could not be sent" });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  const resetToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  try {
    const user = await User.findOne({
      resetToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.password = req.body.password;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};








// export const resetPassword = async (req, res) => {
//   const { email, resetToken } = req.body;
//   const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

//   const html = `
//     <p>Hello,</p>
//     <p>You requested to reset your password.</p>
//     <p><a href="${resetUrl}">Click here to reset</a></p>
//     <p>If you did not request this, please ignore this email.</p>
//   `;

//   try {
//     await sendEmails({
//       to: email,
//       subject: "Reset Your Password",
//       html,
//     });
//     res.json({ success: true, message: "Reset email sent" });
//   } catch (err) {
//     res.status(500).json({ error: "Email could not be sent" });
//   }
// };