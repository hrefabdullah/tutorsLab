import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI)

        console.log("MongoDB connected")
    } catch (err){
        console.error("MongoDB connection error:", err)
    }
}

export default connectDB