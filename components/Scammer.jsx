import { Text, Grid } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Scammer = ({ name }) => {
  return (
    <Grid
      border="5px solid rgba(0,0,0,0.25)"
      borderRadius="15px"
      p={3}
      w={150}
      gap={1}
      placeItems="center"
      placeContent="center"
      bg="rgba(0,0,0,0.75)"
      templateRows="auto auto auto"
    >
      <Image
        width={100}
        height={100}
        alt="pfp not loaded"
        src={`https://mc-heads.net/avatar/${name}`}
      />
      <Text color="white">{name}</Text>
      <InfoOutlineIcon
        color="white"
        onClick={() => window.open(`https://sky.shiiyu.moe/stats/${name}`)}
        cursor="pointer"
      />
    </Grid>
  );
};

export default Scammer;
