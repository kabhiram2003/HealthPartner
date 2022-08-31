import React from "react";
import classes from "./Testimonials.module.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Testimonials = () => {
    return (
        <>
        <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1 className={classes.hed}>Testimonials</h1>
                </Grid>
        </Grid>
        {/* <img src="/Larrow.png" className={classes.larrow} alt="" /> */}
        <div className={classes["rect"]}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <img src="/image3.png" className={classes["image"]} alt="" />
                </Grid>
                <Grid item xs={8}>
                    <p className={classes["content"]}>It’s been a wonderful experience working with TATA 1mg. I used to work in a private sector but after joining with TATA 1mg my life changed. Starting from acquiring new customers to service repeat customer company marketing team has helped me a lot to be successful. we hope to continue giving service to our customers in coming days as well. We convey our gratitude for the guidance and support provided by the company. We feel its more like a family now.</p>
                    <div className={classes["line"]}></div>
                    <p className={classes["name"]}>Sagar Sen</p>
                </Grid>
            </Grid>
        </div>
        </>
    )
};

export default Testimonials;