function CompChoice(UserChoice) {
  let Choice = "";
  let randNum = Math.random() * 3;

  if (randNum > 0 && randNum <= 1) {
    Choice = "Bat";
  } else if (randNum > 1 && randNum <= 2) {
    Choice = "Ball";
  } else {
    Choice = "Stump";
  }
  console.log(`User choice is ${UserChoice}`);
  console.log(`Machine choice is ${Choice}`);

  return Choice;
}

let clicks = localStorage.getItem("clicks") || 0;

function ButtonClicked() {
  clicks++;
  UpdateColor();
}

function UpdateColor() {
  document.querySelector(
    ".count-clicks"
  ).innerText = `I have been clicked ${clicks} times!`;
  localStorage.setItem("clicks", clicks);

  if (clicks % 2) {
    document.querySelector(".count-clicks").style.backgroundColor = "lightblue";
  } else {
    document.querySelector(".count-clicks").style.backgroundColor = "red";
  }
}

UpdateColor();
