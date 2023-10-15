import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGanres from "../hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";

const GanreList = () => {
  const { data } = useGanres();

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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GanreList;
