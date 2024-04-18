import mongoose from "mongoose";

export const connect = async ()=>{
    mongoose.connect("mongodb+srv://root:root@cluster0.cxbbh8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
}