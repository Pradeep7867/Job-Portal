import { Application } from "../models/application.model.js";
import { User } from "../models/user.model.js";
import { Job } from "../models/job.model.js";

// Apply for a Job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id; // Get the user ID from the request
    const jobId = req.params.id; // Get the job ID from the URL parameters

    // Validate the job ID
    if (!jobId) {
      return res.status(400).json({
        message: "Job ID is required!!",
        success: false,
      });
    }
    // Check if the user role is 'student'
    const user = await User.findById(userId); // Adjust this line to get the user
    if (!user || user.role !== 'student') {
      return res.status(403).json({
        message: "Only students can apply for jobs!",
        success: false,
      });
    }

    // Check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job!!",
        success: false,
      });
    }

    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }

    // Create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    // Update the job's applications array
    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully",
      success: true,
    });
  } catch (error) {
    console.error(error); // Use console.error for logging errors
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message, // Return the error message for debugging
    });
  }
};


// Get applied jobs for a user
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        populate: {
          path: "company",
        },
      });

    if (!applications || applications.length === 0) {
      return res.status(404).json({
        message: "No applications found!!",
        success: false,
      });
    }

    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message,
    });
  }
};

// Get applicants for a job (Admin)
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      populate: {
        path: "applicant",
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message,
    });
  }
};

// Update application status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id; // Fixed typo

    if (!status) {
      return res.status(400).json({
        message: "Status is required!!",
        success: false,
      });
    }

    // Find the application by Application ID
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        message: "Application not found!!",
        success: false,
      });
    }

    // Update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully",
      success: true, // Changed from message to success
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message,
    });
  }
};
