import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import AWS from "aws-sdk";

import { useState } from "react";

function ProductHowItWorks() {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  AWS.config.update({
    accessKeyId: "ASIA3GOQJCHZRES7SNFU",
    secretAccessKey: "hwFrUiIiEKIiw2q1IPwQaTijNORGm58aWjD2abIU",
    sessionToken:
      "IQoJb3JpZ2luX2VjEJH//////////wEaCXVzLWVhc3QtMSJHMEUCIQCv7Vy/uN5v1OQhkKCZYcUD9uEAnP5BORhs8dTTXEdkGQIgKfNwbHTRQ/pErCx6YNW708xHE5GDZXFyFap9pIjuoOYqoAIImv//////////ARABGgw3Njk3NzI4MTg5MzEiDBsEMZCzPX5fKlCuqir0ASlzMx4WduACR+WQBiiPE9VBepJlsYZo3Q8GqBfdC4/1PgpsZKkBkOhiICb6usrtAkSjpoc6sLsyf/uLtym/gflJHIW187Eqzg/hnJl5b0FpGhWreX/TtiBX6/r03TjrEa7lnDUgFYRBJn9fdq5WoDXK5iMkFF8goWO/1/357PEKCyTUr2qQm4liNnDVZ7O1PqpL6VVYIyOYqIhJMaU9bYD+0pzCd5/iveM2dCD2nYX4g3j7xRiG4/zy5srM84MTwgG3h9B/bOtiDxKoKpaMv+yWegTI9FWG0Hgu2XJ9BimW9g2I1ki55SB1mZmJ73UK7yThTgMwyP6HqQY6nQGZAjCS940IFulKNRZicHDHJVigRYwti9/nnocM8k0PZ3iE9BEPXtHmCNZuUFQL0JmQ/GuwLWRb0gEGO8Zrjiq/h2X+hSwqBENiEenWcbP3bqkCl1cSMcC5hCLadFQF+4GlkJ4vfGGSFvZbuA5pjT8n5oCstre1Jv0hq+vO4EBhherWyqASREOc1ktZREmvLPbfQwV1BJcG6HLplkmk",
  });

  const myBucket = new AWS.S3({
    params: { Bucket: "emr-user-resumes" },
    region: "us-east-1",
  });

  const handleUpload = async () => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: "emr-user-resumes",
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log("sss");
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <Box component="section" sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2">
          Upload the file
        </Typography>
        <Button color="secondary" size="large" variant="contained" component="a" onClick={handleUpload} sx={{ mt: 5 }}>
          Upload
        </Button>
        <input type="file" onChange={handleFileChange} />
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
