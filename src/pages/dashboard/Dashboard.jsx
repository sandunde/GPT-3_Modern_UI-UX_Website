import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/eyeguard.png";
import User from "../../assets/user.png";
import Cookies from "js-cookie";
import "./Dashboard.css";
import WebCam from "../../components/webcaom/WebCam";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Form from "../../components/form/Form";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Dashboard = () => {
  const storedUsername = Cookies.get("username");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const storedValue = localStorage.getItem('isCompleted')

  const handleOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/result");
    }, 3000);
  };

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
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </div>
        <div className="dashboard-header-right">
          <div className="dashboard-details">
            <p className="dashboard-acc-type">Basic Account</p>
            <p className="dashboard-acc-name">{storedUsername} Perera</p>
          </div>
          <img src={User} alt="User" />
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={6} md={8}>
            <Item>
              <div>
                <WebCam />
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Form />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="submit-button">
        <Button onClick={handleOpen} disabled={loading} variant="contained" style={{position: 'relative'}}>
          {loading && <CircularProgress size={24} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />}
          Submit for Results
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
