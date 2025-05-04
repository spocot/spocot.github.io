import "./App.css";
import "@mantine/core/styles.css";
import { Center, MantineProvider } from "@mantine/core";
import MainHeader from "./features/header/MainHeader";

function App() {
  return (
    <MantineProvider>
      <MainHeader />
      <Center>
        <h1>This site is a WIP :)</h1>
      </Center>
    </MantineProvider>
  );
}

export default App;
