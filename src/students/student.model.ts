import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  bio: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
  role: { type: String, required: true },
});
