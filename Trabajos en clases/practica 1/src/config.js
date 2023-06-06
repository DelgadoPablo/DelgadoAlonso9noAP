import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 8000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://josealvia:jose2000@cluster1.4jitq.mongodb.net/Examen1?retryWrites=true&w=majority";
