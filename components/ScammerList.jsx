import { useEffect, useState } from "react";
import { Grid, Center } from "@chakra-ui/react";
import Scammer from "./Scammer";

const ScammerList = ({ list }) => {
  return (
    <Center>
      <Grid
        w="100%"
        gap={10}
        templateColumns="repeat( auto-fit, minmax(150px, 1fr) );"
      >
        {list.map((item) => {
          return <Scammer key={item} name={item} />;
        })}
      </Grid>
    </Center>
  );
};

export default ScammerList;
