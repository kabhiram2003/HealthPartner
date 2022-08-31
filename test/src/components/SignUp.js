import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./SignUp.module.css";
import { Typography } from "@mui/material";

const SignUp = () => {
  return (
    <>
      <div className={classes.rect}>
        <Grid container >
          <Grid item xs={5}>
            <p className={classes.header}>How to sign up?</p>
            
          </Grid>
          <Grid item xs={7}>
            <div className={classes.line}></div>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.content}>
            <button type="button" className={classes["button-rect"]}>
              CLICK HERE TO SIGN UP
            </button>
              <p className={classes.text}>Receive a call from Medlife, if shortlisted</p>
              <p className={classes.text}>
                Submit requested documents, if shortlisted (PAN, GST, Address
                Proof, etc.)
              </p>
              <p className={classes.text}>Pay onboarding fees of ₹15,000 + GST (non-refundable).</p>
            </Grid>
            <Grid item xs={6}>
            <img src="/sign_up.png" alt="" className={classes.image} />
          </Grid>
          </Grid>
        </Grid>
        {/* <Typography className={classes.label} align="center">
          The entire process takes less than 7 days
        </Typography> */}
      </div>
    </>
  );
};

export default SignUp;
