import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [3, "First name must be at least 3 characters"],
      maxlength: [30, "First name must be at most 50 characters"],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [3, "Last name must be at least 3 characters"],
      maxlength: [30, "Last name must be at most 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      validate: {
        validator: (v) => /^\d{10}$/.test(v),
        message: (props) => `${props.value} is not a valid phone number`,
      },
    },

    date: {
      type: Date,
      required: [true, "Reservation date is required"],
      validate: {
        validator: (v) => v >= new Date().setHours(0, 0, 0, 0),
        message: "Reservation date cannot be in the past",
      },
    },

    time: {
      type: String,
      required: [true, "Reservation time is required"],
      validate: {
        validator: (v) =>
          /^([01]\d|2[0-3]):([0-5]\d)$/.test(v),
        message: "Use HH:MM 24-hour format",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
