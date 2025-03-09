import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { signupSchema } from "../validators/verifyToken .js";

// Signup Controller hai ye jo user ko signup krne me help krega
export const signup = async (req, res) => {
  try {
    // Validate request jo bhi user input hai usko validate krna hai
    const validatedData = signupSchema.parse(req.body);
    const { username, email, password } = validatedData;

    // Hash password hai ye
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({ username, password: hashedPassword, email });

    // Save user to database
    await user.save();
    user = await User.findOne({ email });

    // Generate JWT token karta hai ye
    const token = jwt.sign({ id: user._id }, "abcd", { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: error.errors });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login Controller aa gaya ab jo user ko login krne me help krega
export const login = async (req, res) => {
  const { eamil, password } = req.body;

  if (!eamil || !password) {
    return res.status(400).json({ message: "All fields are necessary" });
  }

  try {
    const user = await User.findOne({ eamil });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "abcd", { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });

    res.status(200).json({ success: true, message: "User logged in" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server is busy, try again later" });
  }
};
