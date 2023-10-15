import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GanreList";
import { useState } from "react";
import { Genre } from "./hooks/useGanres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}
      >
        <GridItem area={`nav`}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={`aside`} paddingX={5}>
            <GanreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={`main`}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
