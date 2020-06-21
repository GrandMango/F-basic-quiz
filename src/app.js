import "./style/index.scss";
import { getUserInfo } from "./requestAPI";

const url = window.location.href;
const id = url.split("users/")[1];

const fulfillBriefIntroHtml = async () => {
  const user = await getUserInfo(id);
  document.getElementById("name").innerText = user.name;
  document.getElementById("age").innerText = user.age;
  document.getElementById("avatar").src = user.avatar;
  document.getElementById("description").innerText = user.description;
};

fulfillBriefIntroHtml();
