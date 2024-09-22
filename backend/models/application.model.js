import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({

  job:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Job',
    required : true
  },

  applicant : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },

  status:{
      type : String,
      enum : ['pending', 'accepted', 'rejected'],
      default : 'pending'
  }

}, {timestamps: true});
// Indexing for performance
applicationSchema.index({ job: 1 });
applicationSchema.index({ applicant: 1 });
export const Application = mongoose.model("Application", applicationSchema);