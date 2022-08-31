import React from "react";
import classes from "./Task.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Task = () => {
  return (
    <>
      <div className={classes["rect-task"]}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <h1 className={classes["hed-1"]}>What does a</h1>
            <h1 className={classes["hed-2"]}>Health Partner do?</h1>
          </Grid>
          <Grid item xs={7}>
            <div className={classes["line"]}></div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <p className={classes["p-1"]}>
              Reach out to potential customers and create awareness about Tata
              1mg
            </p>
            <p className={classes["p-1"]}>
              Explain about the services offered by Tata 1mg - medicines, health
              products, diagnostics and doctor consultations
            </p>
            <p className={classes["p-1"]}>
              Help customers place orders, where required
            </p>
            <p className={classes["p-1"]}>
              Follow up and engage for future needs
            </p>
          </Grid>
          <Grid item xs={4}>
            <img src="/image2.png" className={classes["image"]} alt="" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Task;
