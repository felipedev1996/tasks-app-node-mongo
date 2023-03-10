
import  { config } from "dotenv";
config();
const puerto = 3000;
export const MONGODB_URI =  process.env.MONGODB_URI || 'mongodb://127.0.0.1/test';
export const PORT =  process.env.PORT || puerto;