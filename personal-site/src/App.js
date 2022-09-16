import "./App.css";
import React, { useState, useEffect } from "react";
import ModelGalleryFiber from "./threejs/model-gallery-fiber";
import { Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";

export default function App() {
  const [data, setData] = useState([{}]);

  // TODO: Fix this chunk of code
  useEffect(() => {
    fetch("/test").then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);
  // End TODO

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/test").then((response) =>
        response.json()
      );
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Grid
      container
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#abcdef" }}
      columns={2}
    >
      {/* <Grid container xs={12} sm={7} lg={6}> */}
      <Grid container columnSpacing={10}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              aliquet porttitor lacus luctus accumsan. Id nibh tortor id aliquet
              lectus proin. Facilisis volutpat est velit egestas dui id ornare.
              Eget nulla facilisi etiam dignissim diam quis. Tempor orci dapibus
              ultrices in. Turpis tincidunt id aliquet risus feugiat in ante. Ut
              porttitor leo a diam sollicitudin tempor id eu. Erat pellentesque
              adipiscing commodo elit at imperdiet dui accumsan. Vitae et leo
              duis ut diam quam nulla. Et egestas quis ipsum suspendisse
              ultrices. Molestie a iaculis at erat.
            </p>

            {/* Might also be broken below here */}
            <div>
              {typeof data.members === "undefined" ? (
                <p>Loading...</p>
              ) : (
                <p> {data} </p>
              )}
            </div>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
}
