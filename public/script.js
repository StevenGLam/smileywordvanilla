//let circle =`<div class="red"> Test </div>`;

document.body.style.backgroundColor = "orange";
let charDivs = document.querySelectorAll("div");
/* let charDivs = () => {
  return {
    s: document.getElementById("s"),
    m: document.getElementById("m"),
    i: document.getElementById("i"),
    l: document.getElementById("l"),
    e: document.getElementById("e"),
    y: document.getElementById("y")
  };
}; */

let styleChassis = () => {
  let chassis = document.getElementById("chassis");
  chassis.style.cssText =
    "background-color:yellow;width:800px;height:400px;margin:5rem auto; text-align:center";

  let list = charDivs.forEach(el => {
    el.style.cssText =
      "background-color:black;float:left;position:relative;top:50%;width:3rem;height:3rem;text-align:center;border-radius:30%;margin:0 20px;color:#fff;animation:fadein 4s;position:relative;left:25%;top:50%;transform:translate(-50%,-50%)";
  });

  /*chassis.appendChild(charDivs().s).style.cssFloat = "left";
  chassis.appendChild(charDivs().m).style.cssFloat = "left";
  chassis.appendChild(charDivs().i).style.cssFloat = "left";
  chassis.appendChild(charDivs().l).style.cssFloat = "left";
  chassis.appendChild(charDivs().e).style.cssFloat = "left";
  chassis.appendChild(charDivs().y).style.cssFloat = "left"; */
};

let createLetters = () => {
  let smiley = ["S", "M", "I", "L", "E", "Y"];

  /*  smiley.forEach(el => {
    let circle = document.createElement("DIV");
  }); */

  let letterDiv = charDivs[0];
  charDivs.forEach(el => {
    let circle = document.createElement("DIV");

    circle.textContent = "S";
    circle.style.cssText = "position:relative;font-size:2rem;font-weight:bold";
    el.appendChild(circle);
  });
};

// let createM = () => {
//   let circle = document.createElement("DIV");
//   let letterDiv = charDivs().m;
//   circle.className = "red";
//   circle.style.position = "relative";
//   circle.textContent = "test";
//   circle.style["top"] = "200px";

//   letterDiv.appendChild(circle);
// };

styleChassis();

createLetters();
//createM();

/* let createCircle = letter => {
  let circle = document.createElement("DIV");
  let letterDiv = document.querySelector(`#${letter}`);
  circle.className = "red";
  circle.style.position = "relative";
  circle.textContent = "test";
  circle.style["top"] = "200px";

  letterDiv.appendChild(circle);
};

let insertSDiv = letter => {
  if ((letter = "s")) {
    //let sDiv = document.querySelector("#s");
    createCircle("s");
  }
};

let insertMDiv = letter => {
  if ((letter = "m")) {
    // let mDiv = document.querySelector("#m");
    createCircle("m");
  }
};

insertSDiv("s");
insertMDiv("m"); */
