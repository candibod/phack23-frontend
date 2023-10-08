import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import image from "../../static/images/2.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        background: `url(${image})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={image} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Elevate your resume with AI
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Elevate your interview chances with a resume optimized for Applicant Tracking Systems.
      </Typography>
      <Button color="secondary" variant="contained" size="large" component="a" href="/" sx={{ minWidth: 200 }}>
        Get Started
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
