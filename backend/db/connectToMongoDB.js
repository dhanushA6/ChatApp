import mongoose from "mongoose"; 

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected To MongoDB..")
    }
    catch(err){ 
        console.log(`Error: ${err}`)
    }
};
export default connectToMongoDB

