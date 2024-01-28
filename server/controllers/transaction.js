import transactions from "../models/transactions.js";

export const transactioncontroller=async(req,res)=>{
    try {
        const data= await transactions.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}