import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Container maxW="7x1" mt={0} centerContent>
      <Flex>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="lg"
          m={{ sm: 2, md: 5, lg: 10 }}
          p={{ sm: 2, md: 5, lg: 10 }}
          maxH={"800px"}
          overflowY="scroll"
          sx={{
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Have a question or want to work together?
                  </Text>
                  <Box py={{ base: 5, sm: 1, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        thomasple1996@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Austin, Texas
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={3}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      marginLeft={"30px"}
                      size="lg"
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
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsLinkedin size="28px" />}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://www.linkedin.com/in/thomasple13/");
                      }}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg={useColorModeValue("white", "gray.800")}
                  borderRadius="lg"
                >
                  <Box m={1}>
                    <VStack spacing={1}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
