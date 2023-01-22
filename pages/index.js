import { Button, Container, Heading } from "@chakra-ui/react";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import Head from "next/head";

import ScammerList from "../components/ScammerList";
import SearchBar from "../components/SearchBar";

const options = {
  includeScore: false,
};

const Home = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [fuse, setFuse] = useState(new Fuse(list, options));
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/scammers`, {
        method: "GET",
        redirect: "follow",
      });
      const data = await response.json();
      setList(data);
      setData(data);
      setFuse(new Fuse(data, options));
    })();
  }, []);

  useEffect(() => {
    if (!search) {
      setList(data);
      return;
    }
    setList(fuse.search(search).map((item) => item.item));
  }, [search]);

  return (
    <Container p={6} minW="75%">
      <Container
        padding={10}
        maxW="2xl"
        bg="rgba(0,0,0,0.75)"
        borderRadius="15px"
        centerContent
      >
        <Heading color="white">Search Hami&apos;s IRL Trader</Heading>
      </Container>
      <SearchBar search={search} setSearch={setSearch} />
      {/* TODO: implement this feature */}
      {/* <Button bgColor="black" color="white" size="lg">
        REPORT
      </Button> */}
      <ScammerList list={list} />
    </Container>
  );
};

export default Home;
