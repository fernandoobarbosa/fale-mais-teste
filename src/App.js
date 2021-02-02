import "./App.css";
import Calculadora from "./components/calculadora/Calculadora";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="md">
      <Calculadora />
    </Container>
  );
}

export default App;
