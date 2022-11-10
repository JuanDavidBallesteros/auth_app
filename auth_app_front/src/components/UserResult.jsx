import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function UserResult({handleSign, backAction, user}) {
  const { username, lastIngress } = user
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={'bold'} sx={{
          bgcolor: "#000", color: "#FFF", px: 1.5, py:1,
          borderRadius: 2, mb: 2, alignSelf: 'start'
        }} >
          Welcome Back!
        </Typography>
        <Grid pt={3} >
          <Grid item>
            <Typography variant="subtitle" fontWeight={'bold'} >
              Username:{" "}
            </Typography>
            <Typography variant="subtitle">
              {username}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle" fontWeight={'bold'} >
              Last login:{" "}
            </Typography>
            <Typography variant="subtitle">
              {lastIngress}
            </Typography>
          </Grid>
        </Grid>
        <Button variant="text" 
        sx={{ fontWeight: "bold", textTransform: 'capitalize', alignSelf:"end", pt:2 }}
            onClick={() => {
              backAction()
              handleSign(undefined)
            }} >
            Back
          </Button>
      </Box>
    </Container>
  );
}