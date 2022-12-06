import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      bottom="0"
      position="absolute"
      width="100%"
      zIndex={1}
      height={'125px'}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text>Stay Connected With Me</Text>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="md"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsGithub size="28px" />}
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://github.com/Thomasple13");
              }}
            />
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              marginLeft={"30px"}
              size="md"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsLinkedin size="28px" />}
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://www.linkedin.com/in/thomasple13/");
              }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
