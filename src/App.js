import React, { useEffect, useState } from "react";
import { getRidesData, getUserData } from "./api";
import Header from "./components/Header";
import Rides from "./components/Rides";

export default function App() {
  const [rides, setRides] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      getRidesData().then((data) => {
        setRides(data);
      });
      getUserData().then((data) => {
        setUser(data);
      });
    }
    fetchData();
  }, []);
  return (
    <div style={{ backgroundColor: "#101010" }}>
      <Header user={user} />
      <Rides />
    </div>
  );
}
