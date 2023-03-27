var options = ["rock", "paper", "scissor"];

function computerOption() {
  return Math.floor(Math.random() * 3);
}

function chooseOption(optionIndex) {
  var compvalue = computerOption();
  var compOption = options[compvalue];
  var yourOption = options[optionIndex];

  var result = gameResult(compOption, yourOption);
  displayOption(compOption, yourOption);
  showResult(result);
  // console.log(result);
}

function displayOption(compOption, yourOption) {
  let compImageElement = document.getElementById("compImage");
  let yourImageElement = document.getElementById("yourImage");

  compImageElement.style.visibility = "visible";
  yourImageElement.style.visibility = "visible";

  compImageElement.src = compOption + ".webp";
  yourImageElement.src = yourOption + ".webp";
}

function gameResult(computer, you) {
  // Draw
  if (computer == you) return null;

  // you Win
  if (computer == "rock" && you == "paper") return true;
  if (computer == "paper" && you == "scissor") return true;
  if (computer == "scissor" && you == "rock") return true;

  //you Lose
  return false;
}

function showResult(result) {
  if (result == true) {
    var display = document.getElementById("result");
    display.innerText = "Hurray! You Win";
  } else if (result == false) {
    var display = document.getElementById("result");
    display.innerText = "Opps Soory! You Lose";
  } else {
    var display = document.getElementById("result");
    display.innerText = "Match Draw! Please try again";
  }
}
