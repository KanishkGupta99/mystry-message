import mongoose from "mongoose";

export async function connect() {
    if(mongoose.connection.readyState==1){
        return
    }
    try {
        mongoose.connect(process.env.MONGO_URL!);

        mongoose.connection.on('connected', () => {
            console.log("MongoDB connected!");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error", err);
            process.exit(1);
        });

    } 
    catch (err) {
        console.error("Something went wrong in connecting to the database", err);
        process.exit(1);
    }
}
