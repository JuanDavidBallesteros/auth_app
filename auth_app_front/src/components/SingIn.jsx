import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import consumer from "../consumer";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AUTH APP
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ handleSign, handleForgot }) {

  const gateDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yy = today.getFullYear();
    return `${mm}/${dd}/${yy}`;
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    consumer.authenticateUser({
      username: data.get('email'),
      password: data.get('password')
    }, (res) => {
      if (res) {
        if(res.data){
          console.log(res.data, "Authenticated successfully");
          consumer.sendUser({
            ...res.data,
            lastIngress: gateDate()
        }, (res) => {
          console.log(res.data);
        })
          handleSign(res.data)
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("Something went wrong");
      }
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" fontWeight={'bold'} sx={{
          bgcolor: "#000", color: "#FFF", px: 1.5,
          borderRadius: 4, mb: 2
        }} >
          AUTH APP
        </Typography>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#BE9BE0", textTransform: "capitalize" }}
            disableElevation
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button variant="text"
                    sx={{ fontWeight: "bold", textTransform: 'capitalize', alignSelf: "end", pt: 2 }}
              onClick={ () => {
                  handleForgot(true)
                }
              }>
                Forgot password?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}