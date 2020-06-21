import axios from "axios";

const baseURL = "http://localhost:8080/users";

export const getUserInfo = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  // console.log(response.data);
  return response.data;
};

export const getUserEducationInfo = async (id) => {
  const response = await axios.get(`${baseURL}/${id}/educations`);
  // console.log(education);
  return response.data;
};
