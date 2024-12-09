import Company from '../models/companyModels.js';

export const registerCompany = async (req, res) => {
  try {
    // Extract company details from the request body
    const { companyName, jobDescription, location } = req.body;

    // Check if all required fields are provided
    if (!companyName || !jobDescription || !location) {
      return res.status(400).json({
        message: "Please provide company name, job description, and location.",
        success: false,
      });
    }

    // Check if a company with the same name already exists
    const existingCompany = await Company.findOne({ companyName });
    if (existingCompany) {
      return res.status(400).json({
        message: "A company with this name already exists.",
        success: false,
      });
    }

    // Create and save the new company
    const newCompany = await Company.create({
      companyName,
      jobDescription,
      location,
      userId: req.user.userId, // Assume req.user contains the logged-in user's info
    });

    // Respond with success
    res.status(201).json({
      message: "Company registered successfully!",
      success: true,
      company: newCompany,
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error while registering company:", error);
    res.status(500).json({
      message: "Something went wrong while registering the company.",
      success: false,
    });
  }
};


export const getCompany = async (req, res) => {
  try {
    const userId = req.user.userId; 

    // Find the company by userId
    const company = await Company.findOne({ userId });

    // If company does not exist, return an error response
    if (!company) {
      return res.status(400).json({
        message: "Company does not exist",
        success: false,
      });
    }

    // If company is found, return the company details
    return res.status(200).json({
      message: "Company found",
      success: true,
      company, 
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id; // company ID from URL
    const company = await Company.findById(companyId); // Use the correct companyId
    
    if (!company) {
      return res.status(404).json({
        message: "Cannot find the company with this ID",
        success: false,
      });
    }

    res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error retrieving company",
      success: false,
    });
  }
};


export const updateCompany = async (req, res) => {
    try {
      const companyId = req.params.id; 
      const { companyName, location, logo, jobDescription } = req.body;
  
      // Validate required fields
      if (!companyName && !location && !jobDescription && !logo) {
        return res.status(400).json({
          message: "No fields provided to update",
          success: false,
        });
      }
  
      // Update the company
      const updatedCompany = await Company.findByIdAndUpdate(
        companyId, // Find the company by ID
        { companyName, location, logo, jobDescription }, // Update fields
        { new: true, runValidators: true } // Return the updated document
      );
  
      // If company not found
      if (!updatedCompany) {
        return res.status(404).json({
          message: "Company not found",
          success: false,
        });
      }
  
      // Respond with success
      res.status(200).json({
        message: "Company updated successfully",
        success: true,
        company: updatedCompany,
      });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).json({
        message: "An error occurred while updating the company",
        success: false,
      });
    }
  };
  