"use client";

import {
  Box,
  Grid,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <Grid container width="100%" height="100%">
        <Grid item xs={8} width="100%" height="100%">
          <Box
            sx={{
              backgroundColor: "#f1ededce",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/images/logo.png"
              alt="square logo"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            sx={{
              justifyContent: "flex-start",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ textDecoration: "underline", marginBottom: "35px" }}>
              Login
            </h1>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <TextField variant="outlined" />
            </FormControl>
            <FormControl style={{ marginTop: "20px" }}>
              <FormLabel>Password</FormLabel>
              <TextField variant="outlined" />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "30px", maxWidth: "130px" }}
            >
              Log in
            </Button>
            <Box sx={{ marginTop: "15px" }}>
              Not a member? <Link href="/register/step01">Sign Up</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default Login;
