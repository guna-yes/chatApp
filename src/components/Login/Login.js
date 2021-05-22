import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    "& .MuiButtonBase-root ":{
      background:"#3f51b5",
      color: "white",
     
    }
  },
}));
export default function Login() {
  const [room, setroom] = useState("");
  const [name, setname] = useState("")
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation="10"
        style={{ padding: "1em ", width: "30vw", background: "whitesmoke" }}
      >
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Name"
              size="small"
              helperText="Enter your Name"
              variant="outlined"
              fullWidth
              style={{ margin: 8 }}
            />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Room"
              size="small"
              
              helperText="Enter the Room Name"
              variant="outlined"
              fullWidth
              style={{ margin: 8 }}
            />
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}  style={{display: 'flex', justifyContent:"center"}}>
         <Link style={{textDecoration:"none"} }  to={`/room?${room}&&${name}`}>  <Button>Login</Button></Link>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid>
        
      </Paper>
    </div>
  );
}
