import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required : true
  },
  email:{
    type: String,
    required : true,
    unique : true
  },
  phonenumber: {
    type: Number,
    required : true,
  },

  password: {
    type: password,
    required : true
  },
  role:{
    type: String,
    enum: ['student', 'recruiter' ],
    required : true
  },

  profile:{
    bio:{type: String},
    skills:[{type: String}],
    resume : {type : String},
    resumeOrigninalName : {type: String},
    company :{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
    profilePhots :{
      type : String,
      default: ""
    }
  },
}, {timestamps:true});

export const User = mongoose.Schema('User', userSchema);