import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import RideDetail from "./RideDetail";

export default function Rides({ rides, user }) {
  const [rideList, setRideList] = useState({ rides });

  function handleList() {
    return <RideDetail rides={rides} />;
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
      distance = 999999;
      for (var i in ride.station_path) {
        cur = ride.station_path[i] - user.station_code;
        if (cur >= 0 && cur < distance) distance = cur;
      }
      ride["distance"] = distance;
    });

    SortDis(rides);
    console.log(rides);
  }

  function SortUpcoming(data) {
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
          {handleDistance()}
          {handleList()}
        </TabPanel>
        <TabPanel>{handleList()}</TabPanel>
        <TabPanel>{handleList()}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
