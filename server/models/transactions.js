import mongoose, { Schema } from "mongoose";
import  {loadType} from "mongoose-currency"


const schema=mongoose.Schema;
loadType(mongoose);

const monthSchema=new Schema({
    month:String,
    revenue:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    expenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    operationalExpenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    nonOperationalExpenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
      },
    },
 {
    toJSON:{getters:true}
})

const dailySchema=new  Schema({
    day:String,
    revenue:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    expenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    },
 {toJSON:{getters:true}

})


const  transactionSchema=new Schema({
     totalProfit:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
     },
     totalRevenue:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
     },
     totalExpenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
     },
     expensesByCategory:{
        type:Map,
        of:{
            type:mongoose.Types.Currency,
            Currency:"USD",
            get:(v)=>v/100
        }
     },
     monthlyData:[monthSchema],
     dailyData:[dailySchema]
},
{timestamps:true,toJSON:{getters:true}}
)
export default mongoose.model("transactions",transactionSchema)