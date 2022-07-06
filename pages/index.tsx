import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaPizzaSlice } from "react-icons/fa";
import Homepage from "./homepage";
const Links = ["Home", "Menu", "Services", "Blog", "About", "Contact"];
const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="manifest" href="./manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pizza-1.jpg" />
      </Head>
      <Box>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          bg={"#121618"}
          p={{ md: "10px 80px", base: "10px 30px" }}
        >
          <Box p="2">
            <Heading m="0" color={"#fff"} display={"flex"} fontSize={"20px"}>
              <Flex>
                <Box me="5px" mt="5px">
                  {" "}
                  <FaPizzaSlice color="#fac564" fontSize={"20px"} />
                </Box>
                Pizza
              </Flex>
            </Heading>
            <Text m={0} color="#fac564" letterSpacing={4}>
              {" "}
              Delicous
            </Text>
          </Box>
          <Spacer />

          <Box>
            {" "}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                p="0"
              >
                {Links.map((link, i) => (
                  <Link
                    px={"20px"}
                    py={1}
                    rounded={"md"}
                    key={i}
                    _hover={{
                      textDecoration: "none",
                      color: "#fac564",
                    }}
                    color="#FFFFFFB3"
                    href={"#"}
                  >
                    {link}
                  </Link>
                ))}
              </HStack>
            </HStack>
          </Box>
        </Flex>
        <Box>
          <Homepage />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
