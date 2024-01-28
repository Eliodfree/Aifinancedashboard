import  express  from "express";
import { transactioncontroller } from "../controllers/transaction.js";

export const transanctionroute=express.Router();
 transanctionroute.get("/",transactioncontroller)
