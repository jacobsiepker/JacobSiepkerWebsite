import './App.css';
import React from "react"
import ModelGalleryFiber from './threejs/model-gallery-fiber';
import { Grid } from '@mui/material'

export default function App() {
  return(
    < Grid container columns= {{  }} spacing = {2} >
      <Grid item xs={8}>
        < ModelGalleryFiber />
      </Grid>
    </Grid>
  )
}