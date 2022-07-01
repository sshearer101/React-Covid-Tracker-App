import React from "react";
import { Line } from 'react-chartjs-2'

export default function ChartComp({dailyData}){

    if(!dailyData){
        return "Loading..."
    }




// const lineChart = (
//         dailyData.length ? (
//         <Line
//             data={{
//                 labels: dailyData.map((x) => x.date),
//                 datasets:[{
//                     data: dailyData.map(( x ) => x.confirmed),
//                     label: 'Infected'
//                 },{
//                     data: dailyData.map(( x ) => x.deaths),
//                     label: 'Deaths'
//                 }],
//             }}
//         />) : null  
//     )

const data={
            labels: dailyData.map((x) => x.date),
            datasets:[
            {
                data: dailyData.map(( x ) => x.confirmed),
                label: 'Infected'
            },
            {
                data: dailyData.map(( x ) => x.deaths),
                label: 'Deaths'
            }
        ],
    }
   

    return(
        <div className="line-chart-container">
            {/* {lineChart} */}
            <Line data={data}/>
        </div>
    )
}