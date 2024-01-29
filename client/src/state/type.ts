export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number
}

export interface Month{
    id:string;
    month:string;
    revenue:number;
    expenses:number;
    nonOperatingExpenses:number;
    operatingExpenses:number
}
export interface Day{
    id:string;
    day:string;
    revenue:number;
    expenses:number;
}
export interface GetTransactionsResponse{
    id:string;
    _id:string;
    __v:number;
    totalProfit:number;
    totalRevenue:number;
    totalExpenses:number;
    expensesByCategory:ExpensesByCategory;
    monthlyData:Array<Month>;
    dailyData:Array<Day>;
}