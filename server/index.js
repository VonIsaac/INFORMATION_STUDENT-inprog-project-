import express from "express"
import {connectDb} from "./database/index.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

    const app = express()
    dotenv.config()
    connectDb()

    const PORT = process.env.PORT || 7000


    const userSchema  = new mongoose.Schema({
        name: String,
        age: Number,
        gender: String,
        birthday: String,
        address: String,
        description: String
    });

    const useModel = mongoose.model("data", userSchema)
    

 app.get('/getUsers',async (req, res) => {
    const userData = await useModel.find()
    console.log(userData)

    if(userData == null){
        res.json("EMPTY ARRAY")
    }

    res.json(userData)

    return 
 })

 app.listen(PORT, () => {
    console.log(`THE SERVER IS RUNNING on port ${PORT}`)
})

/*app.listen(3001, () => console.log('THE SERVER IS RUNNING') )*/