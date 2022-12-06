import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const IMAGE1 = "https://imgur.com/RbjDEME.png";
const IMAGE2 = "https://imgur.com/VthRCKq.png";
const IMAGE3 = 'https://imgur.com/fGwrT5z.png'

export default function Project() {
  return (
    <>
      <Text fontSize="32px" mb="20px" textAlign="center">
        My Projects
      </Text>
      <Flex
        margin={{ md: "0 auto 0 auto" }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        maxH={{ base: "70%" }}
        overflowY={{ base: "auto" }}
        sx={{
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Center m={{ sm: 3, md: 3, lg: 3 }} p={{ sm: 1, md: 2, lg: 2 }}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            cursor="pointer"
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `${IMAGE1}`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(40px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={IMAGE1}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Flex>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/Thomasple13/weather-app");
                  }}
                >
                  <FaGithub />
                </Button>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://thomasple13.github.io/weather-app/");
                  }}
                >
                  <FaExternalLinkAlt />
                </Button>
              </Flex>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                align={"center"}
              >
                Weather Dashboard
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text align={"center"}>
                  A simple application to check the current weather forecast.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center m={{ sm: 3, md: 3, lg: 3 }} p={{ sm: 1, md: 2, lg: 2 }}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            cursor="pointer"
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `${IMAGE2}`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(40px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={IMAGE2}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Flex>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/Lawhornmatt/RecipeIO");
                  }}
                >
                  <FaGithub />
                </Button>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://recipeio-project2.herokuapp.com/login"
                    );
                  }}
                >
                  <FaExternalLinkAlt />
                </Button>
              </Flex>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                RecipeIO
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text align={"center"}>
                  An application to store all your recipes and sort them into
                  books.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center m={{ sm: 3, md: 3, lg: 3 }} p={{ sm: 1, md: 2, lg: 2 }}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            cursor="pointer"
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `${IMAGE3}`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(40px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={IMAGE3}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Flex>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://github.com/Thomasple13/weather-app");
                  }}
                >
                  <FaGithub />
                </Button>
                <Button
                  m={1}
                  label={"Github"}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://thomasple13.github.io/weather-app/");
                  }}
                >
                  <FaExternalLinkAlt />
                </Button>
              </Flex>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                React Portfolio
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text align={"center"}>
                  The application that you are using right now. A website to
                  showcase my skills and projects.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Flex>
    </>
  );
}
