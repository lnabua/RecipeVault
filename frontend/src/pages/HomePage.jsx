import { Container, Typography } from '@mui/material';
import RecipeList from '../components/RecipeList';


const HomePage = () => {
    return (
        <Container sx={{ backgroundColor: "#f1f8e9" }}>
        <Typography variant="h4" gutterBottom>
          My Recipes
        </Typography>
        <RecipeList />
      </Container>
    );
};

export default HomePage;