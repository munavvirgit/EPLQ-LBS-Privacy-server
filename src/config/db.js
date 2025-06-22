import mongoose from "mongoose"

export const databaseconnection=async()=>{
try{
   await mongoose.connect(process.env.mongourl)
}catch(error){
    console.log(error)
}
}