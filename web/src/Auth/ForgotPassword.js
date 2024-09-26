import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import Swal from "sweetalert2";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import backgroundImage from "./logo.jpg";
export default function Login() {
  const styles = {
    paper: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
    },
    body: {
      backgroundSize: "70vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh", // Ensure the background covers the entire viewport height
      margin: 0, // Remove default margin
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      position: "relative", // Allow pseudo-element positioning
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for content readability
      borderRadius: "8px",
      padding: "16px",
      zIndex: 2, // Place content above the blurred image
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(4px)", // Apply blur to the image
      zIndex: 0, // Make sure the background image is behind everything
    },
    avatar: {
      margin: "4px",
      backgroundColor: "gray",
      width: "100px", // Set the width to 100px
      height: "100px", // Set the height to 100px
    },
    title: {
      fontWeight: "bold",
      fontSize: "35px",
      fontFamily: "Courier, monospace",
      marginBottom: "16px",
    },
    form: {
      width: "100%",
      marginTop: "4px",
    },
    submit: {
      margin: "16px 0 8px",
      transition: "background-color 0.3s ease", // Add transition property for background color
      "&:hover": {
        backgroundColor: "#1976D2", // Change the background color on hover
      },
    },
  };
  const [email, setEmail] = useState("");

  const sendPasswordResetLink = () => {
    emailjs
      .send(
        "service_13atebg",
        "template_lfprqlb",
        {
          to_mail: email,
          from_name: "MicroWe HR Team",
          to_name: email,
          link: "http://localhost:3000/reset-password",
        },
        "GnYrFxvAAIVTwgFuL"
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Link Sent",
          text: `A password reset link has been sent to ${email}.`,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send reset password link. Please try again later.",
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You might want to add validation for the email address before sending the link
    sendPasswordResetLink();
  };

  return (
    <div style={styles.body}>
    <div style={styles.backgroundImage}></div> {/* Blurred background image */}
      <Container component="main" maxWidth="xs" style={styles.container}>
        <CssBaseline />
        <div style={styles.paper}>
          <Avatar style={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={styles.title}>
            Forgot Password
          </Typography>
          <form style={styles.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* ... any additional form fields or logic for the Forgot Password page */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styles.submit}
            >
              Reset Password
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/" variant="body2">
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
