import React from "react";
import { Flex, Avatar, Text, Box } from "@chakra-ui/react";

export default function Header({ user }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["#000000"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Text fontSize="4xl" fontWeight="bold">
        Edvora
      </Text>
      <Box display="flex" alignItems="center" letterSpacing="wide">
        <Text fontSize="xl" fontWeight="bold" px={4}>
          {user.name}
        </Text>
        <Avatar name={user.name} src={user.url} iconLabel={user.name} />
      </Box>
    </Flex>
  );
}
