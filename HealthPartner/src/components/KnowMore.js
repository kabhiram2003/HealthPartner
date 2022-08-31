import React from "react";
import classes from "./KnowMore.module.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Knowmore = () => {
    return (
        <>
        
        <Grid container spacing={2} className={classes.rect}>
                <Grid item xs={7} >
                    <p className={classes["content"]} align="center" >Important Notes and Terms of Engagement</p>
                    <p className={classes["content"]} align="center">of Medlife Program for Health Partners</p>
                </Grid>
                <Grid item xs={5} >
                    <p className={classes["label"]} align="center">KNOW MORE</p>
                </Grid>
        </Grid>
        </>
    )
};

export default Knowmore;