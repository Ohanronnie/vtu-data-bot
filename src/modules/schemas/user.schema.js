import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pin: {
      type: Number,
      required: true,
      unique: false,
    },
    phone_number: {
      type: Number,
      required: false,
      unique: false,
    },
    wallet_balance: {
      type: Number,
      required: false,
      default: 0.0,
    },
    wallet_account: {
      type: String,
      required: false,
    },
    sender_id: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("pin")) {
    this.password = bcrypt.hashSync(this.pin, 10);
  }
  next();
});
export const User = mongoose.model("User", userSchema);
