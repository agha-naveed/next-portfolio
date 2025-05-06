import mongoose, { ConnectOptions } from 'mongoose';

const URI = process.env.MONGODB_URI as string;

mongoose.set('bufferCommands', false);
let isConnected = false;

export default async function dbConnection(): Promise<void> {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    
    isConnected = true;
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    } else {
      console.error('An unknown error occurred while connecting to MongoDB');
    }
  }
}