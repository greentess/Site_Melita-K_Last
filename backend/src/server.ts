import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import itemRouter from './routers/item.router'
import { dbConnect } from './configs/database.config';

dbConnect(); 

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/items", itemRouter);



const port = 5001;
app.listen(port, () => {
    console.log("Сервер на http://localhost:" + port);
})