import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import lines from "../../static/images/productCurvyLines.png";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box component="section" sx={{ overflow: "hidden", bgcolor: "secondary.light", color: "white" }}>
      <Box align="center">
        <Typography variant="h4" sx={{ mt: 10, color: "white" }}>
          Apply to jobs with confidence
        </Typography>
      </Box>
      <Container sx={{ mt: 10, mb: 15, display: "flex", position: "relative" }}>
        <Box component="img" src={lines} alt="curvy lines" sx={{ pointerEvents: "none", position: "absolute", top: -180 }} />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ImportContactsIcon fontSize="large" />
              <Typography variant="h5" sx={{ my: 5 }} align="center">
                ATS-Friendly Formatting
              </Typography>
              <Typography variant="h5" align="center">
                {"Improve resume structure and readability for easy ATS parsing."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <JoinFullIcon fontSize="large" />
              <Typography variant="h5" sx={{ my: 5 }} align="center">
                Relevancy analysis
              </Typography>
              <Typography variant="h5" align="center">
                {"Analyze a job posting against your resume to calculate a relevancy score."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PrecisionManufacturingIcon fontSize="large" />
              <Typography variant="h5" sx={{ my: 5 }} align="center">
                AI-powered enhancements
              </Typography>
              <Typography variant="h5" align="center">
                {"Unlock intelligent insights with tangible recommendations to boost your relevancy score."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
