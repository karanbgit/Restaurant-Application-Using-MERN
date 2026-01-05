import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "RestaurantApplication",
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

export default dbConnection;