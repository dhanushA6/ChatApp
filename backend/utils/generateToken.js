import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) =>{

    const token = jwt.sign({userId}, process.env.JWT_SCERET, {
        expiresIn:"15d",
    })  

   

    res.cookie('jwt', token, {
        maxAge: 15*24*60*60*1000, // MS 
        httpOnly: true, // to prevent XXS attacks cross-site scripting attacks 
        sawwsite: "strict", // tp prevent CSRF attacks cross-site request forgery attacks 
        secure : process.NODE_ENV  !=="development"
        
    }); 

    // console.log(res.cookie)

}
    export default generateTokenAndSetCookie;
 

