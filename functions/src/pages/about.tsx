import {Button, Container, Typography} from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">About</Typography>
      <Typography>We are a business.</Typography>
      <Button variant="contained" color="secondary">
        Hello
      </Button>
    </Container>
  );
};

export default AboutPage;
