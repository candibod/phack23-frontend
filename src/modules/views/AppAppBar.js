import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../static/images/logo.png";

function ResponsiveAppBar() {
  return (
    <AppBar sx={{ backgroundColor: "white" }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{ height: "54px", marginTop: "5px" }} src={logo} alt="increase priority" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 2 }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 2 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained">Contained</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
