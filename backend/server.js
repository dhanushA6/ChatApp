import express from "express";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"; 
import authRouters from "./routes/auth_routers.js"
import  connectToMongoDB  from "./db/connectToMongoDB.js"; 
import messageRouters from "./routes/message_routers.js"
import userRouters from "./routes/users_routers.js"




const app = express()
dotenv.config()
app.use(express.json()) // to parse the incoming request body to json payload
app.use(cookieParser()); // to parse the cookies body 
const PORT = process.env.PORT || 5000
 

app.use('/api/auth', authRouters) 
app.use('/api/messages', messageRouters)
app.use('/api/users', userRouters)


app.post('/', (req, res) =>{
    res.send("Hello word !!")
})  



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on the port ${PORT}`) ;
})



