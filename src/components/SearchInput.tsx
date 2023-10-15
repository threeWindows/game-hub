import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          width="100%"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
