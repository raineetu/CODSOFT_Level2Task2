import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job', 
      required: true,
    },
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected', 'In Review'], 
      default: 'Pending', 
    },
    resume: {
      type: String, 
      required: true,
    },
   
  },
  { timestamps: true }
);

const Application = mongoose.model('Application', applicationSchema);
export default Application;
