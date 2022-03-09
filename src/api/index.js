import axios from "axios";

const URL = "https://assessment.api.vweb.app/";

export const getRidesData = async () => {
  try {
    const res = await axios.get(`${URL}rides`);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async () => {
  try {
    const res = await axios.get(`${URL}user`);
    let data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
