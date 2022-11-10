import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';


export default function CuadroLateral({ handleClickAway, children, handleSign }) {


  return (
    <ClickAwayListener onClickAway={() => {
      if (handleClickAway) {
        handleClickAway();
        handleSign();
      }
    }}>
      <Box width={"100%"} height={"100%"} sx={{ bgcolor: "#FFF", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {children}
      </Box>
    </ClickAwayListener>
  );
}
