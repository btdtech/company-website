import {Button, Container, Typography} from '@mui/material';
import {Modal} from '@btd-tech/ui-lib';
import {useState} from 'react';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Container maxWidth="md">
      <Button variant="contained" color="primary" onClick={openModal}>
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
      <Modal
        open={showModal}
        title="Modal"
        onClose={closeModal}
        onCancel={closeModal}
        onConfirm={closeModal}
        onDiscard={closeModal}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto
        magni provident culpa in, dolor enim saepe accusantium rem ullam earum
        ea quibusdam maxime ut exercitationem officia sunt vero perspiciatis!
      </Modal>
    </Container>
  );
};

export default HomePage;
