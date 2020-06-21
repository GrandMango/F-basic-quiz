import "./style/index.scss";
import { getUserInfo, getUserEducationInfo } from "./requestAPI";

const url = window.location.href;
const id = url.split("users/")[1];

const fulfillBriefIntroHtml = async () => {
  const user = await getUserInfo(id);
  document.getElementById("name").innerText = user.name;
  document.getElementById("age").innerText = user.age;
  document.getElementById("avatar").src = user.avatar;
  document.getElementById("description").innerText = user.description;
};

const fulfillEducationTable = async () => {
  const education = await getUserEducationInfo(id);

  const compare = function (obj1, obj2) {
    if (obj1.year < obj2.year) {
      return -1;
    }
    if (obj1.year > obj2.year) {
      return 1;
    }
    return 0;
  };
  education.sort(compare);

  const table = document.getElementById("education_table");
  education.forEach((obj) => {
    table.innerHTML +=
      `<tr><td>${obj.year}</td>` +
      `<td><strong>${obj.title}</strong>` +
      `<p>${obj.description}</p></td></tr>`;
  });
};

fulfillBriefIntroHtml();
fulfillEducationTable();
