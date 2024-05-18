import User from "../models/user.model.js"; 

export const getUserForSideBar = async (req, res)=>{
        
   try{
        const loggedUserId = req.user._id 

        const fillterdUsers = await User.find({_id: {$ne: loggedUserId}}).select("-password");
        if (fillterdUsers)
        res.status(200).json(fillterdUsers) 
   }
   catch(err){
      console.error("Error in getUserController: ", err.message)
      res.status(500).json({error: "Internal Servere Error "}) 
   }

}