import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GanreList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
      >
        <GridItem area={`nav`}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={`aside`}>
            <GanreList></GanreList>
          </GridItem>
        </Show>
        <GridItem area={`main`}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
