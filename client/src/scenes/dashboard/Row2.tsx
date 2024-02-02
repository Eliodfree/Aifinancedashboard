import React from 'react'
import DashboardBox from '../../components/Dashboard'
import { useTheme } from '@mui/material';
import { useGetKpisQuery } from '../../state/api';
import { Palette } from '@mui/material/styles/createPalette';
import { Month } from '../../state/types';
type Props = {
    
}

const Row2 = (props: Props) => {
const {palette}=useTheme();
const {data}=useGetKpisQuery();
console.log(data)

const data2=React.useMemo(()=>{ 
  return (data && data[0].monthlyData.map(({month,revenue,expenses,operationalExpenses,nonOperationalExpenses})=>{
    return{
      name: month.substring(0,3),
      revenue:revenue,
      expenses:expenses,
      nonOperationalExpenses:nonOperationalExpenses,
      operationalExpenses:operationalExpenses

}
} )
  )
},[data])
console.log(data2)
  return (
    <>
     <DashboardBox  gridArea="d"></DashboardBox>
     <DashboardBox  gridArea="e"></DashboardBox>
     <DashboardBox  gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2