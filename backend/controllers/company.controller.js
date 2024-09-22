import { Company } from "../models/company.model.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is required",
        success: false,
      });
    }
    let company = await Company.findOne({
      name: companyName,
    });
    if (company) {
      return res.status(400).json({
        message: "Company Name must be Unique",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company Refisterd Sucessfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//We have to Get the details of Company
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged In USer iD

    //it return Array list of Companies
    const companies = await Company.find({ userId });

    //if Companies not Found
    if (!companies.length) { // Check if array is empty
      return res.status(404).json({
        message: "Companies Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
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

// Now Get Companies by ID
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    id(!company);
    {
      return res.status(404).json({
        message: "Company Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Company information
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file; // Placeholder for file handling
    // Cloudinary Section

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if(!company)
    {
      return res.status(404).json({
        message: "Company Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message : "Company information updated",
      success: true,
    });
    
  } catch (error) {
    console.log(error);
  }
};


