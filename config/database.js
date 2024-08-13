import mongoose from 'mongoose';

// use let so it can be reassigned
let connected = false;

// All mongoose methods are asynchronous
const connectDB = async () => {
  // only fields specified in our schema will be saved to our database
  mongoose.set('strictQuery', true);

  // If the database is already connected, then don't connect again
  if (connected) {
    console.log('MongoDB is connected');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    // whatever the error is
    console.log(error);
  }
};

export default connectDB;
