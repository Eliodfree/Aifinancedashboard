import React from 'react'
import DashboardBox from '../../components/Dashboard'
import { useGetKpisQuery } from '../../state/api'
import {ResponsiveContainer,AreaChart,Area,CartesianGrid,XAxis,YAxis,Tooltip, BarChart} from 'recharts';
import { LineChart,Legend,Line ,Bar} from 'recharts';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import Dashborad from './index';

type Props = {

}
const Row1 = (props: Props) => {
    const {palette}=useTheme();
    const {data}=useGetKpisQuery();
    console.log(data);

    //lets usememo
    const data2=React.useMemo(()=>{
     return (
      data && data[0].monthlyData.map(({month,revenue,expenses})=>{
    return {
      name: month.substring(0,3),
      revenue:revenue,
      expenses:expenses
    }
      } )
     )
    },[data])
console.log(data2);

 const data3=React.useMemo(()=>{
  return(
    data && data[0].monthlyData.map(({month,revenue,expenses})=>{
    return {
      name: month.substring(0,3),
      revenue:revenue,
      profit:(revenue - expenses).toFixed(2),
    }
  }))},[data])

console.log(data3);
  return (
    <>
        {/* dashboard */}
      <DashboardBox  gridArea="a">
        <Header
         title='Revenue'
         subtitle='the topline represents revenue ,the bottom line represents profit'
          sidetitle='+4%'
        />
      <ResponsiveContainer width="100%" height="80%"style={{color:'green'}} >
        <AreaChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
    <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8}/>
      <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorexpenses" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8}/>
      <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0}/>
    </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name"  tickLine={false}/>
          <YAxis />
          <Tooltip />
           {/* revenue */}
          <Area type="monotone"
          dataKey="revenue" 
          stroke={palette.primary.main} 
          dot={false}
          fillOpacity={1}
          fill="url(#colorrevenue)" />
          {/* //expenses */}
           <Area type="monotone"
          dataKey="expenses" 
          stroke={palette.primary.main} 
          dot={false}
          fillOpacity={1}
          fill="url(#colorexpenses)" />
        </AreaChart>
      </ResponsiveContainer>
      </DashboardBox>
       {/* dashboard2 */}
      <DashboardBox  gridArea="b">
      <Header
         title='Revenue'
         subtitle='the topline represents revenue ,the bottom line represents profit'
          sidetitle='+4%'
        />
      <ResponsiveContainer width="100%" height="80%"style={{color:'green'}} >
         <LineChart
            width={500}
            height={400}
            data={data3}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
      </ResponsiveContainer>

          
      </DashboardBox>
        {/* Dashborad3 */}
      
      <DashboardBox  gridArea="c">
      <Header
         title='Revenue'
         subtitle='the bar graph shows the revenue gained'
          sidetitle='+4%'
        />
           <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
           </ResponsiveContainer>
      </DashboardBox>
    
    </>
  )
}

export default Row1