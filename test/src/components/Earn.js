import React,{useState} from "react";
import classes from "./Earn.module.css";
import Grid from "@mui/material/Grid";
import Slider from "./Slider.js";
import DiscreteSliderMarks from "./Slider.js";

const Earn = () => {
    const [input, setinput] = useState();
    const inputChangeHandler = (event) => {
        setinput(event.target.value);
    }
  return (
    <>
      <div className={classes["rect"]}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h1 className={classes["h-1"]}>How much can you earn</h1>
            <h1 className={classes["h-2"]}>as a Health Partner?</h1>
          </Grid>
          <Grid item xs={7}>
            <div className={classes["line"]}></div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p className={classes["content-1"]}>
              How many orders do you expect per month?
            </p>
          </Grid>
          <Grid item xs={4}>
            <input type="number" onChange={inputChangeHandler} className={classes["input-1"]}></input>
            {/* <div className={classes["number-0"]}>0</div>
                    <div className={classes["number-300"]}>300</div>
                    <div className={classes["number-600"]}>600</div>
                    <div className={classes["number-1000"]}>1000</div>
                    <div className={classes["number-2000"]}>2000</div>
                    <div className={classes["number-3000"]}>3000</div>
                    <div className={classes["number-6000"]}>6000</div>
                    <div className={classes["number-10000"]}>10000</div> */}
            {/* <div className={classes["number"]}>0</div>
                    <div className={classes["number-500"]}>500</div>
                    <div className={classes["number-750"]}>750</div>
                    <div className={classes["numb-1000"]}>1000</div>
                    <div className={classes["number-1250"]}>1250</div>
                    <div className={classes["number-1500"]}>1500</div>
                    <div className={classes["number-2000"]}>2000</div>
                    <div className={classes["number-2500"]}>2500</div> */}

            {/* <div className={classes["input-1"]}></div>
            <p className={classes["content-1"]}>each month!</p> */}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DiscreteSliderMarks className={classes.slider} oninput={input}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p className={classes["content-1"]}>
              What would the average order value be?
            </p>
          </Grid>
          <Grid item xs={4}>
            <input type="number" className={classes["input-1"]}></input>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DiscreteSliderMarks />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p className={classes["content-2"]}>
              If you achieve the above performance, you could potentially earn
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <input type="number" className={classes["input-1"]}></input>
          </Grid>
          <Grid item xs={6}>
            <p className={classes["content-3"]}>
              each month!
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Earn;
