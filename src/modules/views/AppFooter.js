import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "secondary.light" }}>
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid item>
          <Typography variant="h5">{"Elevate My Resume"}</Typography>
          <Typography variant="h5">{"@2023"}</Typography>
        </Grid>
      </Container>
    </Typography>
  );
}
