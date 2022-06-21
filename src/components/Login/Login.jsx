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
            sx={{ marginBottom: "10px", color: "#464646", fontWeight: "600" }}
          >
            Login to your Account
          </Typography>
          <input type="text" placeholder="Enter Email *" />
          <div className="password-input">
            <input type="text" placeholder="Password *" />
            <VisibilityOffIcon className="icon" sx={{ fontSize: "1rem" }} />
          </div>
          <p className="forgot">Forgot Password?</p>
          <Button
            fullWidth
            variant="contained"
            sx={{
              fontSize: "0.8rem",
              padding: "7px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Login
          </Button>
          <p className="account">
            Don't have an account? <span> Register now </span>
          </p>
        </form>
      </div>
    </div>
  );
}
