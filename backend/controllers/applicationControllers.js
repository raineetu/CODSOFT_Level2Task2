import Application from '../models/applicationModels.js'; // Import the Application model

// Create a new application
export const createApplication = async (req, res) => {
  try {
    const { jobId, applicantId, resume } = req.body;
    
    // Check if application already exists for the given job and applicant
    const existingApplication = await Application.findOne({ jobId, applicantId });
    if (existingApplication) {
      return res.status(400).json({
        message: 'You have already applied for this job.',
        success: false,
      });
    }

    // Create a new application
    const newApplication = new Application({
      jobId,
      applicantId,
      resume,
    });

    // Save the application to the database
    await newApplication.save();

    return res.status(201).json({
      message: 'Application submitted successfully!',
      success: true,
      application: newApplication,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to submit application.',
      success: false,
    });
  }
};

// Get all applications for a specific job
export const getApplicationsByJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    // Find all applications for the given jobId
    const applications = await Application.find({ jobId }).populate('applicantId', 'name email'); // You can also populate other fields as necessary

    if (!applications || applications.length === 0) {
      return res.status(404).json({
        message: 'No applications found for this job.',
        success: false,
      });
    }

    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to retrieve applications.',
      success: false,
    });
  }
};

// Get all applications by a specific applicant
export const getApplicationsByApplicant = async (req, res) => {
  try {
    const applicantId = req.params.applicantId;

    // Find all applications by the given applicantId
    const applications = await Application.find({ applicantId }).populate('jobId', 'title company'); // You can populate the job information

    if (!applications || applications.length === 0) {
      return res.status(404).json({
        message: 'No applications found for this applicant.',
        success: false,
      });
    }

    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to retrieve applicant applications.',
      success: false,
    });
  }
};

// Update the status of an application
export const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    // Validate the status value
    if (!['Pending', 'Accepted', 'Rejected', 'In Review'].includes(status)) {
      return res.status(400).json({
        message: 'Invalid status value.',
        success: false,
      });
    }

    // Find the application by ID
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        message: 'Application not found.',
        success: false,
      });
    }

    // Update the status of the application
    application.status = status;
    await application.save();

    return res.status(200).json({
      message: `Application status updated to ${status}.`,
      success: true,
      application,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to update application status.',
      success: false,
    });
  }
};

// Delete an application
export const deleteApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;

    // Find the application by ID and delete it
    const application = await Application.findByIdAndDelete(applicationId);

    if (!application) {
      return res.status(404).json({
        message: 'Application not found.',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Application deleted successfully.',
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to delete application.',
      success: false,
    });
  }
};
