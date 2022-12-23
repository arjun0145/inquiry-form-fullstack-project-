import mongoose  from "mongoose";


export async function configureDb() {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/inquiry');
    console.log("database connected");
} catch (error) {
    console.log("database connection failed");

}

}
