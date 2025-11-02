import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticateUser = asyncHandler(async (req, res, next) => {
  // Mock user for development - NO AUTHENTICATION
  const mockUserId = new mongoose.Types.ObjectId("507f1f77bcf86cd799439011");
  
  // Check if mock user exists, if not create it
  let mockUser = await User.findById(mockUserId);
  if (!mockUser) {
    mockUser = new User({
      _id: mockUserId,
      username: "TestUser",
      email: "test@example.com",
      password: "dummy-password-hash",
      verified: true
    });
    await mockUser.save();
  }
  
  req.user = {
    _id: mockUserId,
    username: mockUser.username,
    email: mockUser.email,
    verified: mockUser.verified
  };
  next();
});

export default authenticateUser;
