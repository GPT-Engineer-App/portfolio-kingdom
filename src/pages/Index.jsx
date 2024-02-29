import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Link, IconButton, Stack, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} as="section" mt={{ base: "6", md: "10" }} mb={{ base: "6", md: "10" }}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Frontend Developer | React Expert
          </Text>
        </Box>

        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MDkyMDg4NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" />

        <Text textAlign="center" maxW="3xl">
          Hi there! I'm John, a passionate Frontend Developer with extensive experience in building high-quality, scalable web applications. I specialize in React and have a knack for creating intuitive user interfaces with a focus on performance and user experience.
        </Text>

        <HStack spacing={4} justify="center">
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="Github" icon={<FaGithub fontSize="20px" />} size="lg" colorScheme="gray" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} size="lg" colorScheme="blue" />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope fontSize="20px" />} size="lg" colorScheme="red" />
          </Link>
        </HStack>
      </VStack>

      <Divider my={10} />

      <VStack as="section" spacing={8}>
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} justify="center">
          {/* Project 1 */}
          <Box maxW="sm" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              Project Title
            </Heading>
            <Text mt={4}>A brief description of the project goes here. Highlight the main features and technologies used.</Text>
          </Box>
          {/* Project 2 */}
          <Box maxW="sm" p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              Project Title
            </Heading>
            <Text mt={4}>A brief description of the project goes here. Highlight the main features and technologies used.</Text>
          </Box>
          {/* Add more projects as needed */}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
