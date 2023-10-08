import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ProductSmokingHero() {
  return (
    <Container component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 9 }}>
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          FAQ's
        </Typography>
      </Button>
      <Accordion sx={{ pt: 2, pb: 2 }} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>What is an Applicant Tracking Software (ATS)?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Applicant Tracking Systems (ATS) are software applications used by employers to manage and automate the recruitment and hiring process. These systems help streamline the process by
            allowing employers to collect, store, and screen large volumes of resumes and job applications
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ pt: 2, pb: 2 }} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>What is a relevancy score?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A relevance score in the context of applicant tracking software is a numerical rating or ranking assigned to job applicants based on their fit or suitability for a specific job opening.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ pt: 2, pb: 2 }} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>How is the relevancy score calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Our advanced algorithm strategically weighs the frequency of keyword matches in the job listing and evaluates them to your resume for calculation.</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default ProductSmokingHero;
