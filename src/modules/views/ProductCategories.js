import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import textract from "../../static/images/aws-textract.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mt: 10, mb: 10 }}>
        How it works
      </Typography>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <img src={textract} alt="textract"></img>
              <Typography variant="h5" align="center" sx={{ mt: 5, mb: 5 }}>
                Appointment every Wednesday 9am.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <img src={textract} alt="textract"></img>
              <Typography variant="h5" align="center" sx={{ mt: 5, mb: 5 }}>
                Appointment every Wednesday 9am.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <img src={textract} alt="textract"></img>
              <Typography variant="h5" align="center" sx={{ mt: 5, mb: 5 }}>
                Appointment every Wednesday 9am.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
