import express from "express";
const app = express()


app.post("/hooks/catch/:userId/:zapdId", (req,res)=>{
//store in db a new trigger
const userId = req.params.userId;
const zapId = req.params.zapdId
//push it to kafka ques or reddis quese

})