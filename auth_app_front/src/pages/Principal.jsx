import * as React from 'react';
import { Button, Stack, Box, Typography, Divider } from '@mui/material';
import CuadroLateral from '../components/CuadroLateral';
import SignIn from '../components/SingIn';
import SignUp from '../components/SingUp';
import UserResult from '../components/UserResult';
import AdminResul from '../components/AdminResutl';
import UpdatePassword from '../components/UpdatePasswordUser';

export default function Principal() {

  const [lateralBox, setLateralBox] = React.useState(false)
  const [adminBox, setAdminBox] = React.useState(false)
  const [component, setComponent] = React.useState(undefined)
  const [actualUser, setActualUser] = React.useState(undefined)

  const [ updatemodal, setUpdatemodal] = React.useState(false)

  const hideBox = () => {
    setLateralBox(false)
    setAdminBox(false)
    setComponent("")
    setActualUser(undefined)
  }

  React.useEffect(() => {
    // console.log(actualUser)
    if (actualUser) {
      if(actualUser.isAdmin){
        setLateralBox(false)
        setComponent("")
        setAdminBox(true)
      } else {
        setComponent("userResult")
      }
    }
  }, [actualUser])

  return (
    <Box height={'100vh'} sx={{ bgcolor: "#F2A444" }}>
      <UpdatePassword user={undefined} state={updatemodal} 
                setState={setUpdatemodal} setDisable={false} />

      {lateralBox && <Box width={"60%"} height={"100%"} sx={{ position: "absolute" }}>
        <CuadroLateral handleClickAway={hideBox} handleSign={hideBox}>
          {component === "sigin" && <SignIn handleSign={setActualUser} handleForgot={setUpdatemodal} />}
          {component === "sigup" && <SignUp handleSign={setActualUser} />}
          {component === "userResult" && <UserResult handleSign={setActualUser} user={actualUser} backAction={hideBox} />}
        </CuadroLateral>
      </Box>}
      {adminBox && <Box width={"100%"} height={"100%"} sx={{ position: "absolute", zIndex: 100 }}>
        <CuadroLateral handleClickAway={undefined} handleSign={setActualUser}>
          <AdminResul handleBack={hideBox} handleSign={setActualUser} user={actualUser} />
        </CuadroLateral>
      </Box>}
      <Box height={'10%'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' /* bgcolor: "#9AA" */ }}>
        <Box ml={2} alignSelf={"center"}>
          <img src={"/img/shield(1).png"} alt="IMAGEN APP" width={50} />
        </Box>
        <Stack spacing={2} direction="row" my={2} mr={3}>
          <Button variant="contained" sx={{ fontWeight: "bold", textTransform: 'capitalize' }}
            disableElevation onClick={() => {
              setLateralBox(true)
              setComponent("sigin")
            }}>
            Sing in
          </Button>
          <Button variant="outlined" sx={{ fontWeight: "bold", textTransform: 'capitalize' }}
            onClick={() => {
              setLateralBox(true)
              setComponent("sigup")
            }} >
            Sing up
          </Button>
        </Stack>
      </Box>
      <Divider light />
      <Box height={'90%'} sx={{ /* bgcolor: "#ADA" , */ display: 'flex', flexDirection: 'row',
        alignItems: 'left', justifyContent: 'center'
      }}>
        <Box width={'25%'} sx={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center', pl: 8
        }}>
          <Typography variant="h2" fontWeight={'bold'} sx={{
            bgcolor: "#000", color: "#FFF", px: 1.5,
            borderRadius: 4
          }} >
            AUTH APP
          </Typography>
          <Typography variant="subtitle1" color={"#000"} textAlign={'left'} ml={1.5} >
            The new way to validate your employees entrance and create a trustfull log file.
          </Typography>
        </Box>
        <Box width={'75%'} sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',
          alignItems: 'flex-end', pr: 3, /* bgcolor:"#A56" */
        }}>
          <img src={"/img/img5.svg"} alt="IMAGEN APP" width={"55%"} />
        </Box>
      </Box>
    </Box>
  );
}
