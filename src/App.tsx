import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GanreList";
import { useState } from "react";
import { Genre } from "./hooks/useGanres";
import PlatformSelector from "./components/PlatformSelector";
import { Game, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={`main`}>
          <HStack spacing={5} paddingLeft={10} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
