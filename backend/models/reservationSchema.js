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

    //   minlength: [10, "Phone number must be at least 10 digits"],
    //   maxlength: [10, "Phone number must be at most 10 digits"],

      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    numberOfGuests: {
      type: Number,
      required: [true, "Number of guests is required"],
      min: [1, "At least one guest is required"],
      max: [20, "Maximum 20 guests allowed"],
    },
    reservationDate: {
      type: Date,
      required: [true, "Reservation date is required"],
      validate: {
        validator: function (v) {
          return v >= new Date();
        },
        message: (props) =>
          `Reservation date ${props.value} cannot be in the past!`,
      },
    },
    reservationTime: {
      type: String,
      required: [true, "Reservation time is required"],
      validate: {
        validator: function (v) {
          return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid time format! Use HH:MM in 24-hour format.`,
      },
    },
    specialRequests: {
      type: String,
      trim: true,
      maxlength: [200, "Special requests must be at most 200 characters"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
