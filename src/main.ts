import type { People } from "./interfaces/people.interace";
import "./style.css";

const table = document.querySelector(".table")!;
const body = table.querySelector("tbody");

const request = await fetch("https://jsonplaceholder.typicode.com/users");
const data: People[] = await request.json();

data.forEach((user) => {
  if (body) {
    body.insertAdjacentHTML(
      "afterbegin",
      `
        <tr>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
        </tr>
      `,
    );
  }
});