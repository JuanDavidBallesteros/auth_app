import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import UserList from './UserList';
import consumer from "../consumer";
import UpdatePassword from './UpdatePassword';

export default function AdminResul({ handleBack, handleSign, user }) {
    const { username, lastIngress } = user;
    const [users, setUsers] = React.useState([])
    const [ selectedUser, setSelectedUser] = React.useState({})
    const [ updatemodal, setUpdatemodal] = React.useState(false)

    React.useEffect(() => {
        consumer.getUsers((res) => {
            if (res) {
                console.log(res.data)
                setUsers(res.data)
            } else {
                alert("Something went wrong, reload the page");
            }
        })
    // eslint-disable-next-line
    }, [])



    return (
        <Container component="main" maxWidth="lg">
            <UpdatePassword user={selectedUser} state={updatemodal} 
                setState={setUpdatemodal} setDisable={true} />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2} mb={4}>
                    <Typography variant="h5" fontWeight={'bold'} sx={{
                        bgcolor: "#000", color: "#FFF", px: 1.5, py: 1,
                        borderRadius: 2, mb: 2, alignSelf: 'start'
                    }} >
                        Welcome Back!
                    </Typography>
                    <Box item  >
                        <Typography variant="subtitle" fontWeight={'bold'} >
                            Username:{" "}
                        </Typography>
                        <Typography variant="subtitle">
                            {username}
                        </Typography>
                    </Box>
                    <Box item>
                        <Typography variant="subtitle" fontWeight={'bold'} >
                            Last login:{" "}
                        </Typography>
                        <Typography variant="subtitle">
                            {lastIngress}
                        </Typography>
                    </Box>
                </Stack>

                {users && <UserList users={users.length > 0 ? users : []} selectUser={setSelectedUser} showModal={setUpdatemodal} />}

                <Button variant="text"
                    sx={{ fontWeight: "bold", textTransform: 'capitalize', alignSelf: "end", pt: 2 }}
                    disableElevation onClick={() => {
                        handleBack()
                        handleSign(undefined)
                    }} >
                    Back
                </Button>
            </Box>
        </Container>
    );
}