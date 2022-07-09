import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema({
  username: String,
  rating: String,
}, { timestamps: true });

export { userSchema };
