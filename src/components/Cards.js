import React from 'react'
// import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CountUp from 'react-countup';


export default function Cards({ data }) {
if(!data.confirmed){
    return "Loading..."
}

console.log(data.lastUpdate)

  return (
    <div className="container">

      <Grid
        item
        xs={12}
        md={3}
        component={Card}
        
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="h2">
          <CountUp start={0} end={data.confirmed.value} duration={2.75} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of actives cases of COVID-19
          </Typography>
        </CardContent>
      </Grid>
    </div>
  )
}
