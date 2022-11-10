import * as React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import consumer from "../consumer";

export default function UpdatePassword({ state, setState, setDisable }) {
    const [ username, setUsername ] = React.useState(undefined)
    const [ newPassword, setNewPassword ] = React.useState(undefined)

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const onPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }

    return (
        <Dialog open={state} >
            <DialogTitle>Update user password</DialogTitle>
            <DialogContent sx={{}}>
                <TextField
                    disabled={setDisable}
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    value={username}
                    sx={{ my: 1.5 }}
                    onChange={onUsernameChange}
                />
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    //type="password"
                    id="password"
                    value={newPassword}
                    autoComplete="new-password"
                    sx={{ my: 1.5 }}
                    onChange={onPasswordChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    setNewPassword("")
                    setState(false)
                }}>Cancel</Button>
                <Button onClick={() => {
                    consumer.sendUser({
                        username: username,
                        password: newPassword,
                        passwordUserUpdated: true,
                    }, (res) => {
                        console.log(res)
                        if (res.data) {
                            setNewPassword("")
                            setState(false)
                            alert("Successfully updated")
                        } else {
                            alert("Something goes wrong");
                        }
                    })
                }}>Update</Button>
            </DialogActions>
        </Dialog>

    );
}