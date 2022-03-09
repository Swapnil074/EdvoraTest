import React from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  flexbox,
  Box,
} from "@chakra-ui/react";

export default function Rides() {
  return (
    <Box bg="#101010">
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
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
