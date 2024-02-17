import React, { useState } from "react";
import Logo from "../../assets/eyeguard.png";
import User from "../../assets/user.png";
import Cookies from "js-cookie";
import "./Dashboard.css";
import WebCam from "../../components/webcaom/WebCam";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Signin = () => {
  const storedUsername = Cookies.get("username");
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#040C18",
  }));

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <img src={Logo} style={{ width: "150px" }} />
          <p>Hi {storedUsername}! Welcome back</p>
        </div>
        <div className="dashboard-header-right">
          <div className="dashboard-details">
            <p className="dashboard-acc-type">Basic Account</p>
            <p className="dashboard-acc-name">{storedUsername} Perera</p>
          </div>
          <img src={User} style={{ width: "50px", marginLeft: "20px" }} />
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <div>
                <WebCam />
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signin;
