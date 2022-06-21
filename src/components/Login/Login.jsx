import React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Grid, Typography } from "@mui/material";

export default function Login() {
  return (
    <div>
      <Container>
        <Grid sx={{ backgroundColor: "green" }}>
          <Typography>Login to your Account</Typography>
          <form action="">
            <input type="text" placeholder="Enter Email" />
            <input type="text" placeholder="Password" />
            <VisibilityOffIcon />
          </form>
        </Grid>
      </Container>
    </div>
  );
}
