//Business LOgic here
import { User } from "../models/user.model.js";
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
    };
    // const file = req.file;
    // const fileUri = getDataUri(file);
    // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).json({
        message: "User Already exist with tnis email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      role,
            // profile:{
            //     profilePhoto:cloudResponse.secure_url,
            // }
    });

    //registration Sucessfully
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
    let user = await User.findOne({ email });
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
    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // Prepare user data to return
    const loggedInUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
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
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: " Logged Out Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//update profile Function
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills} = req.body;
    // console.log(fullname, email, phoneNumber, bio, skills);
    const file = req.file; // using Cloudinary
    // Cloudinary section later here

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(","); // Convert skills string into an array
    }

    const userId = req.id; //Middle ware Authentication Part
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "user not Found",
        success: false,
      });
    }
    // Update user fields if provided
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    // resume section later here..
   
    await user.save(); // Save the updated user
    // Prepare updated user response
    const loggedInUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile Updated Suceesfully",
      loggedInUser,
      success: true,
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
