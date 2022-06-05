import {Button, Container, Typography} from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">Hello World</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log('Hello')}
      >
        Click Me
      </Button>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam adipisci
        iure accusamus, neque aut suscipit quis iste nostrum molestiae tenetur
        repellendus, obcaecati, voluptatum dolor odit cumque molestias culpa ea
        quos.
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam adipisci
        iure accusamus, neque aut suscipit quis iste nostrum molestiae tenetur
        repellendus, obcaecati, voluptatum dolor odit cumque molestias culpa ea
        quos.
      </Typography>
    </Container>
  );
};

export default HomePage;
