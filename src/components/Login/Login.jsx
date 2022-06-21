import React from "react";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form action="">
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", color: "#464646", fontWeight: "600" }}
          >
            Login to your Account
          </Typography>
          <input type="text" placeholder="Enter Email *" />
          <input type="text" placeholder="Password *" />
          <p className="forgot">Forgot Password?</p>
          <Button fullWidth variant="contained" sx={{ fontSize: "0.6rem" }}>
            Login
          </Button>
          <p className="account">
            Don't have an account? <span> Register now </span>
          </p>

          {/* <VisibilityOffIcon /> */}
        </form>
      </div>
    </div>
  );
}
