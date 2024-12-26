import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import useHabitStore from "./store/store";
import AddHabitForm from "./components/add-form";
import HabitList from "./components/habit-list";

const App = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* form  */}
        <AddHabitForm />
        <HabitList />
      </Box>
    </Container>
  );
};

export default App;
