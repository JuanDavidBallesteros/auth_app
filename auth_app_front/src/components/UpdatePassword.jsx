import * as React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import consumer from "../consumer";

export default function UpdatePassword({ user, state, setState, setDisable }) {
    const [newPassword, setNewPassword] = React.useState(undefined)

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
                    value={user.username}
                    sx={{ my: 1.5 }}
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
                        ...user,
                        password: newPassword,
                        passwordUpdated: true,
                    }, (res) => {
                        if (res) {
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