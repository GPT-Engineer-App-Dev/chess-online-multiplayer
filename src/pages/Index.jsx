import { Box, Container, Flex, Heading, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaBars, FaCog, FaQuestionCircle } from "react-icons/fa";
import React, { useState } from "react";

const ChessBoard = React.lazy(() => import("../components/ChessBoard"));

const Index = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const navSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          p={8}
          bg="brand.900"
          color="white"
        >
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            icon={<FaBars />}
            size={navSize}
            aria-label={"Open Menu"}
            variant="outline"
          />
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Online Chess
          </Heading>
          <Flex align="center">
            <IconButton
              icon={<FaQuestionCircle />}
              size={navSize}
              aria-label={"Game Rules"}
              variant="ghost"
            />
            <IconButton
              icon={<FaCog />}
              size={navSize}
              aria-label={"Settings"}
              variant="ghost"
            />
          </Flex>
        </Flex>

        <Flex flex={1} justify="center" align="center">
          <React.Suspense fallback={<Text>Loading Chess Board...</Text>}>
            <ChessBoard />
          </React.Suspense>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;