import { promises as fs } from 'fs';

import express from "express"
import {connectDb} from "./database/index.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
   

  const app = express()
  app.use(express.static('public'));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    );
      next();
  });
   
  dotenv.config()
  //call the connect  to connect to express
  connectDb()
  // call the port from dotenv
  const PORT = process.env.PORT || 7000


  const userSchema  = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: String,
    birthday: String,
    description: String,
    address: String
  });

  const useModel = mongoose.model("infostudents", userSchema)

 app.get('/getUsers/images', async (req, res) => {
    const imageFileContent = await fs.readFile('./data/images.json', 'utf-8');
    const images = JSON.parse(imageFileContent);
    console.log(images)
    if(!images){
      res.status(500).json({ error: "Could not fetch the image" });
    }
    console.log("Getting the images data!")
    res.json({images})
  })

  
  app.get('getUsers/:id', async (req, res) => {
    const {id} = req.params
    const studentsData = await useModel.find(prevData => prevData.id === id)
    console.log(studentsData)

    if(!studentsData){
      return res.status(404).json(`For the id ${id}, no student data could be found.`)
    }

    res.json(studentsData)

  })
 

 app.listen(PORT, () => {
    console.log(`THE SERVER IS RUNNING on port ${PORT}`)
})











/*
app.get('/getUsers/:id', async (req, res) => {
    try{
      const id = req.params;
      const studenstData = await useModel.findById(id)
      if (!id) {
        return res.status(400).json({ message: 'Invalid ID provided' });
      }
      console.log(studenstData)
  
      if (!studenstData) {
          return res
            .status(404)
            .json({ message: `For the id ${id}, no studentData could be found.` });
      }
  
      //fetching the image in json
  
      const imageFileContent = await fs.readFile('./data/images.json');
      const images = JSON.parse(imageFileContent);
  
      const userImages = images.find(image => image.caption === studenstData.name )
  
      const combiningData = {
        ...studenstData.toObject(),
        image: userImages || null,
      };

      res.json(combiningData)

    }catch(error){
      console.error(error)
      res.status(500).json({ message: 'An error occurred while fetching the data.' })
    }

  })

*/
/*app.listen(3001, () => console.log('THE SERVER IS RUNNING') )*/
