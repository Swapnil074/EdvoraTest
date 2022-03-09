import React from "react";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import RideDetail from "./RideDetail";

export default function Rides({ rides }) {
  function handleList() {
    return <RideDetail rides={rides} />;
  }

  function handleDistance() {}

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
        <TabPanel>{handleList()}</TabPanel>
        <TabPanel>{handleList()}</TabPanel>
        <TabPanel>{handleList()}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
