import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String, // No required here, since it could be empty
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    
  },
  firstName: {
    type: String, // Optional
  },
  lastName: {
    type: String, // Optional
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
