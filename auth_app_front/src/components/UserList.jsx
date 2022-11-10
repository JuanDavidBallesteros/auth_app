import * as React from 'react';
import { Box, List ,ListItem ,ListItemAvatar ,IconButton ,ListItemText } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircle from '@mui/icons-material/AccountCircle';
import consumer from "../consumer";

export default function UserList({ users, selectUser,  showModal }) {


    return (
        <Box
            sx={{ width: '80%', height: 400, overflow:'auto' }} >
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    <ListItem key={user._id}
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="delete" sx={{ mx: 1, color: '#6dc8c2' }}
                                    onClick={ () => {
                                        consumer.getUser(user._id, (res) => {
                                            if (res.data) {
                                                selectUser(res.data)
                                                showModal(true)
                                            } else {
                                                alert("Something goes wrong");
                                            }
                                        } )
                                    }
                                }>
                                    <BorderColorIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit" sx={{ mx: 1, color: '#fb6d6d' }}
                                    onClick={ () => {
                                        consumer.deleteUser(user._id, (res) => {
                                            if (res) {
                                                alert(`${res.data.username} deleted`)
                                            } else {
                                                alert("Something goes wrong");
                                            }
                                        }) 
                                    }
                                }>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }
                    >
                        <ListItemAvatar>
                            <AccountCircle fontSize='large' />
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.username}
                            secondary={user.lastIngress}
                        />
                    </ListItem>
                )
                )}
            </List>
        </Box>
    );
}
