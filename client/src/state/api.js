import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes:["transaction"],
    endpoints:(build)=>({
        getKpis:build.query({
            query:()=>"/transactions/transactions",
            providesTags:["transaction"]
        })
    })
}) 
export const {useGetKpisQuery}=api;