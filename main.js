var options = ["rock", "paper", "scissor"];

function computerOption() {
  return Math.floor(Math.random() * 3);
}

function chooseRock() {
  var compvalue = computerOption();
  var compOption = options[compvalue];
  var yourOption = options[0];

  var result = gameResult(compOption, yourOption);
  showResult(result);
  // console.log(result);
}

function choosePaper() {
  var compvalue = computerOption();
  var compOption = options[compvalue];
  var yourOption = options[1];

  var result = gameResult(compOption, yourOption);
  showResult(result);
  // console.log(result);
}

function chooseScissor() {
  var compvalue = computerOption();
  var compOption = options[compvalue];
  var yourOption = options[2];

  var result = gameResult(compOption, yourOption);
  showResult(result);
  //console.log(result);
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
