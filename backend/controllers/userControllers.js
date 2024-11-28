import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, cpassword, role } = req.body;
    const profilePhoto = req.file?.path; 

    // Input validation
    if (!fullname || !email || !phoneNumber || !password || !cpassword || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (password !== cpassword) {
      return res.status(400).json({
        message: "Passwords do not match",
        success: false,
      });
    }

    // Check if email already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      cpassword: hashedPassword,
      role,
      profile: {
        profilePhoto,
      },
    });

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate input fields
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Compare the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }

    // Validate the role
    if (user.role !== role) {
      return res.status(403).json({
        message: "Unauthorized role",
        success: false,
      });
    }

    // Generate token
    const tokendata = { userId: user._id };
    const token = jwt.sign(tokendata, process.env.secret_key, { expiresIn: '1d' });

    // Prepare user data for response
    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    return res.status(200).json({
      message: `Welcome back ${user.fullname}`,
      token, // Include the token in the response
      user: userData,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};


export const logout = async (req, res) => {
  res.clearCookie("token"); 
  res.status(200).json({
    message: "Logged out successfully",
    success: true,
  });
};

export const updateProfile = async (req, res) => {
  try {
    // Extract user ID from the authenticated request (set by middleware)
    const userId = req.user?.userId; // req.user is added by authenticate middleware

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized access. Please log in.",
        success: false,
      });
    }

    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const profilePhoto = req.file?.path;

    // Validate inputs
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Convert skills to an array if it's not already one
    const skillArray = Array.isArray(skills) ? skills : skills.split(",").map(skill => skill.trim());

    // Update the user's profile
    const updatedUser = await User.findByIdAndUpdate(
      userId, // Use authenticated user ID
      {
        fullname,
        email,
        phoneNumber,
        profile: {
          bio,
          skills: skillArray,
          ...(profilePhoto && { profilePhoto }), // Only add profilePhoto if it exists
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};



