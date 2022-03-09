import React from "react";
import { Tab, Tabs, TabList, TabPanels, TabPanel, Box } from "@chakra-ui/react";

export default function Rides() {
  return (
    <Box pl={5} justify="space-between">
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
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
