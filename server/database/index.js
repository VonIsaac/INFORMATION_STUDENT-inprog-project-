import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();

const MONGO_URL =  process.env.MONGO_URL

    export const connectDb  = async () => {
        try{
            const connect = await mongoose.connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log(`Sucess Connected: $${connect.connection.host}`);
        } catch (error) {
            console.log(error);
            process.exit(1);
          }
    }
