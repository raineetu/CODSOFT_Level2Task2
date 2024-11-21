import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: false
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Internship'],
        default: 'Full-time'
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    applications:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Application'
        }
    ]
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

export default Job;
