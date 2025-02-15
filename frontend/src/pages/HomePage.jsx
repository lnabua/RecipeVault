import { Container, Typography } from '@mui/material';


const HomePage = () => {
    return (
        <Container sx={{ backgroundColor: "#f1f8e9" }}>
        <Typography variant="h4" gutterBottom>
          My Recipes
        </Typography>
      </Container>
    );
};

export default HomePage;