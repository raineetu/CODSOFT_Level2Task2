import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    logo: {
      type: String, 
      required: false, 
    },
    jobDescription: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);
export default Company;