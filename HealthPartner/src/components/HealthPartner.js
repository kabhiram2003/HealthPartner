import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./HealthPartner.module.css";
// import {ReactComponent as Logo} from 'C:\\Users\\vivek\\Downloads\\IMAGE.svg';

const HealthPartner = () => {
  return (
    <>
      <div className={classes["rectangle-top"]}>
        <Grid container spacing={2} display={"flex"}>
          <Grid item xs={5}>
            <img src="/IMAGE.png" className={classes["image"]} alt="" />
            
              <button className={classes["apply-rectangle"]}>Apply here</button>
          </Grid>
          <Grid item xs={7}>
            <h1 className={classes["header"]}>Health Partner</h1>
            <h1 className={classes["program"]}>Program</h1>
            <div className={classes["line"]}></div>
            <p className={classes["para_1"]}>We aim to make healthcare understandable, accessible and affordable to all Indians.</p>
            <p className={classes["para_1"]}>We welcome local entrepreneurs to partner with Tata 1mg and carry forward our services and proposition to a larger audience and help them avail our services easily and effortlessly.</p>
            <p className={classes["para_1"]}>We are already working with over 600 Health Partners who help millions of families stay healthier.</p>
            <p className={classes["para_1"]}>Begin your journey towards making a meaningful difference to the community & earning healthy rewards for this.</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HealthPartner;
