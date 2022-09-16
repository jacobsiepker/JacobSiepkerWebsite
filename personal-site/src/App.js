import "./App.css";
import React, { useState, useEffect } from "react";
import ModelGalleryFiber from "./threejs/model-gallery-fiber";
import { Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";

export default function App() {
  //Define Params for API use.
  const [data, setData] = useState([{}]);


  // Get API data. GET request.
  useEffect(() => {
    fetch("/test").then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <Grid
      container
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#abcdef" }}
      columns={2}
    >
      {/* <Grid container xs={12} sm={7} lg={6}> */}
      <Grid container>
        <Stack spacing={1} flex="1 1 0">
          <h1> 3D Model </h1>
          <ModelGalleryFiber />
        </Stack>
      </Grid>
      {/* <Grid container xs={12} sm={5} lg={3}> */}
      <Grid container columnSpacing={10}>
        <Stack spacing={1} flex="1 1 0">
          <Paper>
            <h2> About </h2>
            <p>
              View API data below---------------
            </p>

        {/* Add API data to UI. */}
            <div>
              {typeof data.Test === "undefined" ? (
                <p>Loading...</p>
              ) : (
                <p> {data['Test']} </p>
              )}
            </div>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
}
