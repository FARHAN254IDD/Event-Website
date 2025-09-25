



// const express = require("express");
// const router = express.Router();
// const {
//   registerUser,
//   loginUser,
//   getAllUsers,
//   deleteUser,
//   forgotPassword,
//   resetPassword,
// } = require("../controllers/userController");
// const { protect, authorize } = require("../middleware/authMiddleware");

// // Public routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/forgot-password", forgotPassword); // 👈 New
// router.put("/reset-password/:token", resetPassword); // 👈 New

// // Protected route to get logged-in user
// router.get("/me", protect, (req, res) => {
//   if (!req.user) return res.status(404).json({ message: "User not found" });
  
//   // Send user in a clean format
//   res.status(200).json({
//     user: {
//       id: req.user._id,
//       name: req.user.name,
//       email: req.user.email,
//       role: req.user.role,
//     },
//   });
// });

// // Admin-only routes
// router.get("/", protect, authorize("admin"), getAllUsers);
// router.delete("/:id", protect, authorize("admin"), deleteUser);






import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);

// Protected route to get logged-in user
router.get("/me", protect, (req, res) => {
  if (!req.user) return res.status(404).json({ message: "User not found" });

  res.status(200).json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

// Admin-only routes
router.get("/", protect, authorize("admin"), getAllUsers);
router.delete("/:id", protect, authorize("admin"), deleteUser);

export default router;



