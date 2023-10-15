import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button
} from "@chakra-ui/react";
import useGanres, { Genre } from "../hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GanreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGanres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GanreList;
