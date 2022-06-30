import React from 'react'
// import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import { Card, CardContent, Typography, Grid } from '@mui/material'

export default function Cards(data) {

    Object.keys(data).map((x) => 
        console.log(x)
    )

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
            Title
          </Typography>
          <Typography variant="h5" component="h2">
              {/* {data.confirmed.value} */}
          </Typography>
          <Typography color="textSecondary">
            {/* {new Date(lastUpdate).toDateString()} */}
          </Typography>
          <Typography variant="body2" component="p">
Card Subtitle
          </Typography>
        </CardContent>
      </Grid>
    </div>
  )
}
