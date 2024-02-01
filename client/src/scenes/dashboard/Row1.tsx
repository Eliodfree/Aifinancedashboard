import React from 'react'
import DashboardBox from '../../components/Dashboard'
import { useGetKpisQuery } from '../../state/api'
import {ResponsiveContainer,AreaChart,Area,CartesianGrid,XAxis,YAxis,Tooltip} from 'recharts';
import Header from '../../components/Header';
import { Palette } from '@mui/material/styles/createPalette';
import { useTheme } from '@mui/material';

type Props = {

}
const Row1 = (props: Props) => {
    const {palette}=useTheme();
    const {data}=useGetKpisQuery();
    console.log(data);

    //lets usememo
    const data2=React.useMemo(()=>{
     return (
      data && data[0].monthlyData.map(({month,revenue,expense})=>{
    return {
      name: month.substring(0,3),
      revenue:revenue,
      expenses:expense
    }
      } )
     )
    },[data])
console.log(data2);


  return (
    <>
      <DashboardBox  gridArea="a">
        <Header
         title='Revenue'
         subtitle='the topline represents revenue ,the bottom line represents profit'
          sidetitle='+4%'
        />
      <ResponsiveContainer width="100%" height="80%">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox  gridArea="b"></DashboardBox>
      <DashboardBox  gridArea="c"></DashboardBox>
    
    </>
  )
}

export default Row1