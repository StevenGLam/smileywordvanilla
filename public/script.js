//let circle =`<div class="red"> Test </div>`;

document.body.style.backgroundColor = "orange";
let charDivs = document.querySelectorAll("div:not(#img1");
let chassis = document.getElementById("chassis");
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
  chassis.style.cssText =
    "background-color:yellow;width:60vw;height:60vh;margin:10rem auto; text-align:center;border-radius:5%;display:flex;justify-content:center;";

  /*chassis.appendChild(charDivs().s).style.cssFloat = "left";
  chassis.appendChild(charDivs().m).style.cssFloat = "left";
  chassis.appendChild(charDivs().i).style.cssFloat = "left";
  chassis.appendChild(charDivs().l).style.cssFloat = "left";
  chassis.appendChild(charDivs().e).style.cssFloat = "left";
  chassis.appendChild(charDivs().y).style.cssFloat = "left"; */
};

let createLetters = () => {
  let smiley = ["S", "M", "I", "L", "E", "Y"];

  let list = charDivs.forEach((el, i) => {
    let pos = 0;
    pos++;
    /*    el.style.cssText = `background-color:black;float:left;position:relative;top:50%;width:5rem;height:5rem;border-radius:30%;margin:0 20px;color:	#FFA500;position:relative;left:10%;transform:translate(-50%,-50%);font-weight:bold;font-size:2rem; display:flex;justify-content:center;align-items:center;animation:fadein 1s`; */

    let addStyling = () => {
      el.style.cssText = `background-color:black;float:left;top:30%;width:5rem;height:5rem;border-radius:30%;margin:0 20px;color:	#FFA500;position:relative;font-weight:bold;font-size:2rem; display:flex;justify-content:center;align-items:center;animation:fadein 1s`;
      el.textContent = smiley[i];
    };

    setInterval(addStyling, i * 500);
  });

  let imgSmiley = document.createElement("IMG");
  imgSmiley.src = "images/smileycircle.png";
  let imgDiv = document.querySelector("#img1");
  /* imgDiv.style.cssText = `  margin: -100px 0 0 -150px;text-align:center;position:relative; left:50%; top:30%;
 width:30%; animation:fadeincircle 4s`; */
  imgDiv.style.cssText = ` position:absolute;top:25rem;display:flex;justify-content:center;align-items:center`;
  imgSmiley.style.cssText = `width:250px;height:auto;animation:fadeincircle 4s`;
  document.getElementById("img1").insertAdjacentElement("beforeend", imgSmiley);
  /* let imgSmiley = `  <img src="smileycircle.png" width="150" height="auto" alt="" />`;

  chassis.insertAdjacentHTML("beforeend", imgSmiley); */
  /*  smiley.forEach(el => {
    let circle = document.createElement("DIV");
  }); */
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
