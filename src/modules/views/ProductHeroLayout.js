import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import logo from "../../static/images/productHeroArrowDown.png"; // Tell webpack this JS file uses this image
import image1 from "../../static/images/productHeroWonder.png";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "100vh",
  [theme.breakpoints.up("sm")]: {
    minHeight: 500,
    maxHeight: 1300,
  },
  background: "linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #234B50) 0%,hsl(0,0%,100%) 100%)",
  marginTop: "60px",
}));

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={image1} alt="wonder" width="147" height="80" />
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <span sx={{ display: "none" }}>{sxBackground}</span>
        <Box component="img" src={logo} height="16" width="12" alt="arrow down" sx={{ position: "absolute", bottom: 32 }} />
      </Container>
    </ProductHeroLayoutRoot>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
};

export default ProductHeroLayout;
