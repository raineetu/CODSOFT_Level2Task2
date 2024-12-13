import Job from "../models/jobModels.js"; 

// Admin creates a job
export const postJob = async (req, res) => {
    try {
        const { title, description, company, location, salary, jobType , experience} = req.body;
        const postedBy = req.id; // Assuming `req.id` contains the admin's ID

        if (!title || !description || !company || !location) {
            return res.status(400).json({
                message: "Required fields are missing.",
                success: false,
            });
        }

        const job = await Job.create({
            title,
            description,
            company,
            location,
            experience,
            salary: salary ? Number(salary) : undefined, 
            jobType: jobType || "Full-time", // Default to 'Full-time' if not provided
            postedBy,
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true,
        });
    } catch (error) {
        console.error("Error creating job:", error);
        return res.status(500).json({
            message: "Server error while creating the job.",
            success: false,
        });
    }
};

// Fetch all jobs (for students)
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { location: { $regex: keyword, $options: "i" } },
            ],
        };

        const jobs = await Job.find(query)
            .populate("postedBy", "name email") // Assuming User model has name and email fields
            .sort({ createdAt: -1 });

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: "No jobs found.",
                success: false,
            });
        }

        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return res.status(500).json({
            message: "Server error while fetching jobs.",
            success: false,
        });
    }
};

// Fetch job by ID (for students)
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        const job = await Job.findById(jobId)
            .populate("postedBy", "name email")
            .populate("applications", "applicantName status"); // Assuming Application model has these fields

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false,
            });
        }

        return res.status(200).json({
            job,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching job:", error);
        return res.status(500).json({
            message: "Server error while fetching the job.",
            success: false,
        });
    }
};

// Fetch jobs created by the admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id; // Assuming the admin's ID is available in `req.id`

        const jobs = await Job.find({ postedBy: adminId })
            .populate("postedBy", "name email")
            .sort({ createdAt: -1 });

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: "No jobs found.",
                success: false,
            });
        }

        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.error("Error fetching admin jobs:", error);
        return res.status(500).json({
            message: "Server error while fetching admin jobs.",
            success: false,
        });
    }
};
