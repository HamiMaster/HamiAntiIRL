import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <InputGroup my={5} size="md">
      <Input
        pr="4.5rem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Scammer"
        color="white"
        bg="rgba(0,0,0,0.5)"
      />
      {/* <InputRightElement width="4.5rem">
        <Button h="2rem" size="sm" onClick={() => {}}>
          Search
        </Button>
      </InputRightElement> */}
    </InputGroup>
  );
};

export default SearchBar;
