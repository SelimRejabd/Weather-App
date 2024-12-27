import { model, Schema } from "mongoose";
import { TUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model("User", userSchema);
