import axios from "axios";

const baseURL = "http://localhost:8080/users";

export const getUserInfo = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  console.log(response.data);
  return response.data;
};
