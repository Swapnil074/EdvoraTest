import React from "react";
import {
  Flex,
  Avatar,
  Text,
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header({ user, rides }) {
  return (
    <>
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
      <Box position="absolute" right="20">
        <Menu>
          <MenuButton>
            <Box display="flex" alignItems="center" letterSpacing="wide">
              <HamburgerIcon color="white" />{" "}
              <Text fontSize="xl" fontWeight="bold" px={4} color="white">
                Filter
              </Text>
            </Box>
          </MenuButton>
          <MenuList bg="#101010">
            <MenuItem colorScheme="blackAlpha">
              <Select
                placeholder="State"
                variant="flushed"
                colorScheme="blackAlpha"
                color="white"
              ></Select>
            </MenuItem>

            <MenuItem>
              <Select
                placeholder="City"
                variant="flushed"
                colorScheme="blackAlpha"
                color="white"
              ></Select>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
