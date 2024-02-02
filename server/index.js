import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import helmet from "helmet"
import mongoose from "mongoose"
import { transanctionroute } from "./routes/transaction.js"
import transactions from "./models/transactions.js"
import { kpis } from "./data/data.js"

//configurations
dotenv.config();
const app=express();
app.use(helmet());
app.use(cors())
app.use(morgan("common"))
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.PORT || 8000;

app.use("/transactions",transanctionroute)

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true,})
.then(() => {
  // transactions.insertMany(kpis)
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  
})
.catch((error) => {  console.error('MongoDB connection error:', error);  process.exit(1); });

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
