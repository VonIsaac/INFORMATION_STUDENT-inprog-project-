import mongoose from 'mongoose';
import dotenv from "dotenv";

//use dotenv to clean code and then to call the mongodb url and port 
dotenv.config();

// call the mongo-db url
 const MONGO_URL =  process.env.MONGO_URL

    // use async await cause y not 
    export const connectDb  = async () => {
        
        try{
            // then use awaitand  mongoose to connect the mongodb url 
            const connect = await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log(`Sucess Connected: $${connect.connection.host}`);
        } catch (error) {
            // if we got an error then wee catch an error
            console.log(error);
            process.exit(1);
          }
    };
