import User from "../models/user.model.js"; 
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) 
            return res.status(400).json({ error: "Password don't match" });
        
        const existingUser = await User.findOne({ username });

        if (existingUser) 
            return res.status(400).json({ error: "Username already exists" }); 

        //  Hash the passsword 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // get the random image for the user from the api 
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        // create the user object 
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        // check is the user object created successfully 
        if (newUser){
            await newUser.save(); 
            generateTokenAndSetCookie(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else{
            return res.status(400).json({error: "Error in creating the User document(object)"})
        }
    } catch (err) {
        console.error("Error in signup Controller:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
     
    try{
       
        const {username, password} = req.body 
        const isUserExist = await User.findOne({username});
        const isThePasswordMatched = await bcrypt.compare(password, isUserExist.password ||"");
        if (!isUserExist || !isThePasswordMatched)
            return res.status(400).json({err:"Invalid username or password"}) 
        generateTokenAndSetCookie(isUserExist._id, res)
        res.status(200).json({
            _id:isUserExist._id,
            fullName: isUserExist.fullName, 
            username:isUserExist.username,
            profilePic: isUserExist.profilePic
        })
    
    }
    catch(err){
       console.log("Error in Login Controller :". err)
       return res.status(400).json({err:"Internal Server Error"})
    }
};

export const logout = (req, res) => {
   
    try{
        res.cookie("jwt", "", {maxAge:0 })
        return res.status(200).json({message: "Logged out Successfully"})
    }
    catch(err){
        console.log("Error in Logout Controller :". err.message)
        return res.status(400).json({err:"Internal Server Error"})
     }

}; 
 
