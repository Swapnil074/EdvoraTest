import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import RideDetail from "./NearestRides";
import UpcomingRides from "./UpcomingRides";
import PastRides from "./PastRides";

import moment from "moment";

export default function Rides({ rides, user }) {
  var upcomingCount = 0,
    pastCount = 0;
  // const [pastCount, setPastCount] = useState(0);

  function handleUpcomingCount() {
    const filtered = rides.filter((ride) => new Date(ride.date) > new Date());
    console.log(filtered);
    upcomingCount = filtered.length;
  }

  function handlePastCount() {
    const filtered = rides.filter((ride) => new Date(ride.date) < new Date());
    console.log(filtered);
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

  function handlePast() {
    return <PastRides rides={rides} count={pastCount} />;
  }
  handleDistance();
  handlePastCount();
  handleUpcomingCount();

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
  );
}
