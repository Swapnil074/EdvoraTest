import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Box,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import RideDetail from "./NearestRides";
import UpcomingRides from "./UpcomingRides";
import PastRides from "./PastRides";

import moment from "moment";
import { useEffect } from "react";

export default function Rides({ rides, user }) {
  var upcomingCount = 0,
    pastCount = 0;

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [FilterState, setFilterState] = useState("");
  const [FilterCity, setFilterCity] = useState("");

  // useEffect(() => {
  //   console.log(FilterCity, FilterState);
  //   const Fil = rides.filter((ride) => ride.city === FilterCity);
  //   console.log(0, Fil);
  // }, [FilterState, FilterCity]);

  useEffect(() => {
    async function StatesVal() {
      const states = [...new Set(rides.map((ride) => ride.state))];
      setStates(states);
    }
    async function CitiesVal() {
      const cities = [...new Set(rides.map((ride) => ride.city))];
      setCities(cities);
    }
    StatesVal();
    CitiesVal();
  }, [rides]);

  function handleUpcomingCount() {
    const filtered = rides.filter((ride) => new Date(ride.date) > new Date());
    upcomingCount = filtered.length;
  }

  function handlePastCount() {
    const filtered = rides.filter((ride) => new Date(ride.date) < new Date());
    pastCount = filtered.length;
  }

  function handleList() {
    return <RideDetail rides={rides} />;
  }
  function handleUpcoming() {
    return <UpcomingRides rides={rides} count={upcomingCount} />;
  }

  function SortDis(data) {
    {
      data.sort(function (a, b) {
        if (a.distance < b.distance) {
          return -1;
        }
        if (a.distance > b.distance) {
          return 1;
        }
        return 0;
      });
    }
  }
  function handleDistance() {
    var distance = 0,
      cur = 0;
    rides.map((ride) => {
      distance = 99999999;
      for (var i in ride.station_path) {
        cur = ride.station_path[i] - user.station_code;
        if (cur >= 0 && cur < distance) distance = cur;
      }
      ride["distance"] = distance;
    });

    SortDis(rides);
  }

  function handlePast() {
    return <PastRides rides={rides} count={pastCount} />;
  }
  handleDistance();
  handlePastCount();
  handleUpcomingCount();

  return (
    <Box display="flex">
      <Box w="100%" ml={5}>
        <Tabs variant="unstyled" size="lg">
          <TabList color="gray">
            <Tab
              _selected={{
                color: "white",
                borderBottom: "2px solid",
                borderBottomColor: "white",
              }}
            >
              Nearest rides ({rides.length})
            </Tab>
            <Tab
              _selected={{
                color: "white",
                borderBottom: "2px solid",
                borderBottomColor: "white",
              }}
            >
              Upcoming rides ({upcomingCount})
            </Tab>
            <Tab
              _selected={{
                color: "white",
                borderBottom: "2px solid",
                borderBottomColor: "white",
              }}
            >
              Past rides ({pastCount})
            </Tab>
          </TabList>

          <TabPanels color="white">
            <TabPanel>{handleList()}</TabPanel>
            <TabPanel>{handleUpcoming()}</TabPanel>
            <TabPanel>{handlePast()}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
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
          <MenuList>
            <MenuItem>
              <Select placeholder="State" variant="flushed">
                {states.map((state) => (
                  <option val={state}>{state}</option>
                ))}
              </Select>
            </MenuItem>

            <MenuItem>
              <Select placeholder="City" variant="flushed">
                {cities.map((city) => (
                  <option val={city}>{city}</option>
                ))}
              </Select>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
