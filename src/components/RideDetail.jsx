import React from "react";
import {
  Flex,
  Avatar,
  Text,
  Box,
  VStack,
  Image,
  Badge,
} from "@chakra-ui/react";

export default function RideDetail({ rides }) {
  console.log(rides);
  return (
    <VStack spacing={4} align="stretch">
      {rides.map((ride) => (
        <Box
          bg="black"
          height="250"
          width="80%"
          alignSelf="center"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          p={5}
        >
          <Box width="400" height="200" overflow="hidden" borderRadius="10px">
            <Image src={ride.map_url} boxSize="400" fit="cover" mr={5} />
            <h1>{ride.origin_station_code}</h1>
          </Box>
          <Box ml={5}>
            <Box display="flex">
              <Text color="gray" mr={2}>
                Ride Id:{" "}
              </Text>
              <Text color="white">{ride.id}</Text>
            </Box>
            <Box display="flex">
              <Text color="gray" mr={2}>
                Origin Station:{" "}
              </Text>
              <Text color="white">{ride.origin_station_code}</Text>
            </Box>
            <Box display="flex">
              <Text color="gray" mr={2}>
                station_path:{" "}
              </Text>
              <Text color="white">[ </Text>
              {ride.station_path.map((path) => (
                <Text color="white">{path}, </Text>
              ))}
              <Text color="white">]</Text>
            </Box>
            <Box display="flex">
              <Text color="gray" mr={2}>
                Date:{" "}
              </Text>
              <Text color="white">{ride.date}</Text>
            </Box>
            <Box display="flex">
              <Text color="gray" mr={2}>
                Distance:{" "}
              </Text>
              <Text color="white">0</Text>
            </Box>
          </Box>
          <Box
            display="flex"
            position="absolute"
            alignSelf="flex-start"
            m={10}
            right={220}
          >
            <Badge bg="#000000" color="white" opacity="0.56" mr={5}>
              {ride.city}
            </Badge>
            <Badge bg="#000000" color="white" opacity="0.56">
              {ride.state}
            </Badge>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}
