import { usermodel } from "../models/usermodel.js";

export const Usercontroller = async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, password } = req.body;

     const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await usermodel.create({
      name: name,
      email: email,
      password: password,
    });
    return res.json({
      status: "success",
      message: "user create successfullly",
    });
  } catch (error) {
    console.log(error);
  }
};

export const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    return res.status(200).json({ message: "Login successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const Getuserprofilepicture=async(req,res)=>{
   console.log(req.url)
  try{

    if (req.isAuthenticated()) {
        res.json(req.user); 
      } else {
        res.status(401).json({ message: "Not authenticated" });
      }
  }catch(error){
console.log(error)
  }
}

