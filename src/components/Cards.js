import React from 'react'
// import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CountUp from 'react-countup';


export default function Cards({ data }) {

    //if data.confirmed does not exist, return loading until exists
if(!data.confirmed){
    return "Loading..."
}


  return (
    <div className="container">
      <Grid
        component={Card}
        className="infected-card-container"
      >
        <CardContent>
          <Typography gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
          <CountUp start={0} end={data.confirmed.value} duration={2.75} separator="," />
          </Typography>
          <Typography >
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of actives cases of COVID-19
          </Typography>
        </CardContent>
      </Grid>


      <Grid
        component={Card}
        className="recovered-card-container"
      >
        <CardContent>
          <Typography gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
          <CountUp start={0} end={data.recovered.value} duration={2.75} separator="," />
          </Typography>
          <Typography >
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of recoveries from cases of COVID-19
          </Typography>
        </CardContent>
      </Grid>


      <Grid
        component={Card}
        className="death-card-container"
      >
        <CardContent>
          <Typography gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
          <CountUp start={0} end={data.deaths.value} duration={2.75} separator="," />
          </Typography>
          <Typography >
            {new Date(data.lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths from cases of COVID-19
          </Typography>
        </CardContent>
      </Grid>
    </div>
  )
}
