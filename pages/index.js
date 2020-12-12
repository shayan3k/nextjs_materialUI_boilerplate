import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Material UI
        </Typography>
      </Box>
      <Button variant="contained">Hello World!</Button>;
    </Container>
  );
}
