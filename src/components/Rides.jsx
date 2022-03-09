import React from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import RideDetail from "./RideDetail";

export default function Rides({ rides }) {
  return (
    <Tabs variant="unstyled" size="lg">
      <TabList color="gray">
        <Tab
          _selected={{
            color: "white",
            borderBottom: "2px solid",
            borderBottomColor: "white",
          }}
        >
          Nearest rides
        </Tab>
        <Tab
          _selected={{
            color: "white",
            borderBottom: "2px solid",
            borderBottomColor: "white",
          }}
        >
          Upcoming rides
        </Tab>
        <Tab
          _selected={{
            color: "white",
            borderBottom: "2px solid",
            borderBottomColor: "white",
          }}
        >
          Past rides
        </Tab>
      </TabList>

      <TabPanels color="white">
        <TabPanel>
          <RideDetail rides={rides} />
        </TabPanel>
        <TabPanel>
          <RideDetail rides={rides} />
        </TabPanel>
        <TabPanel>
          <RideDetail rides={rides} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
