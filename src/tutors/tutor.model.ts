import * as mongoose from 'mongoose';

export const TutorSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  bio: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  schoolGraduated: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date },
});

export interface Tutor extends mongoose.Document {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  schoolGraduated: string;
}
