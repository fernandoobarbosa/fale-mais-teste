import "./App.css";
import Calculadora from "./components/calculadora/Calculadora";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant="h3" component="h1" align="center">
        Calculadora Fale Mais
      </Typography>
      <Calculadora />
    </Container>
  );
}

export default App;
