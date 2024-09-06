//Business LOgic here
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const regiter = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User Already exist with tnis email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phonenumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      user: newUser, // You can choose to send limited user info (omit password)
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error, please try again later",
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate input
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is Missing",
        success: false,
      });
    }
     // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

     // Check if password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

    //check if role matches
    if (role != user.role) {
      return res.status(400).json({
        message: "Account Doesn't exist with current role",
        success: false,
      });
    }

    // Prepare data for token
    const tokdenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokdenData, process.env.SECRET_KEY, {
      expiresIn: "1d" });

         // Prepare user data to return
         const loggedInUser =  {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phonenumber,
      role: user.role,
      profile: user.profile,
    };

     // Send token in cookie and respond with success message
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${loggedInUser.fullname}`,
        success: true,
        user: loggedInUser, // Optionally return user details
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error, please try again later",
      success: false,
      error: error.message,
    });
  }
};
