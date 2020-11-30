/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#pressIt").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["my sister", "your dog", "my mother", "a guy"];
  let action = ["stole", "broke", "hit", "kept", "sent"];
  let object = ["my head", "the laptop", "my smartphone", "my house", "my car"];
  let where = [
    "at home",
    "on the street",
    "in the party",
    "at the cafe",
    "in Burger King"
  ];
  let when = ["yesterday", "last week", "on Saturday"];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let objIndx = Math.floor(Math.random() * object.length);
  let whereIndx = Math.floor(Math.random() * where.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    object[objIndx] +
    " " +
    where[whereIndx] +
    " " +
    when[whenIndx]
  );
};
