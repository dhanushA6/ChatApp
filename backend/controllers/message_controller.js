
import Conversation from "../models/conversaion.model.js" 
import Message from "../models/message.model.js"

export const sendMessage = async (req, res)=> {
    try{
        
        const receiverId = req.params.id 
        const {message} = req.body
        const senderId = req.user._id 
        let conversation = await Conversation.findOne({participants:{$all:[senderId, receiverId]}}) 
        //  if this is the first conversation b/w them 
        if (!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId], 
                message
            })
        } 

        const newMessage  = await Message({
            senderId,
            receiverId,
            message
        }) 

       if (newMessage){
        conversation.messages.push(newMessage._id)
       } 
       await Promise.all([conversation.save(), newMessage.save()])
       res.status(200).json({newMessage}) 
          
    }
    catch(err){
        console.error("Error in sendMessage Controller:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getMessages = async (req , res)=>{
     
    try{
        const receiverId = req.params.id 
        const senderId = req.user._id
        const conversaion = await Conversation.findOne({participants:{$all: [senderId, receiverId]}}).populate("messages") 
        if (conversaion){
            res.status(200).json({messages:conversaion.messages})
        } 
        res.status(200).json([])
    } 
    catch(err){
        console.error("Error in getMessage Controller:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

