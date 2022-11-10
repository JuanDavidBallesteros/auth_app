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

export default function SignUp({ handleSign }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        consumer.sendUser({
            username: data.get('email'),
            password: data.get('password'),
            isAdmin: false,
            lastIngress: gateDate()
        }, (res) => {
            if (res) {
                handleSign(res.data)
                alert("Successfully created")
            } else {
                alert("Something goes wrong");
            }
        })
    };

    const gateDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yy = today.getFullYear();
        return `${mm}/${dd}/${yy}`;
    }

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
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disableElevation
                        sx={{ mt: 3, mb: 2, bgcolor: "#BE9BE0", }}
                    >
                        Sign Up
                    </Button>

                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}