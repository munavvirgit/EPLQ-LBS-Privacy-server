import express from "express"
import { Getuserprofilepicture, Loginuser, Usercontroller } from "../controllers/usercontroller.js"
import { Locationupload } from "../controllers/locationuploadcontro.js"

const userrouter=express.Router()

userrouter.post("/user",Usercontroller)
userrouter.post("/user/login",Loginuser)
userrouter.get("/user/profile",Getuserprofilepicture)

userrouter.post("/location/add",Locationupload)

export default userrouter