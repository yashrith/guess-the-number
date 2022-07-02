window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", PlayGame);
  document.getElementById("restart-game").addEventListener("click", InitGame);
}


let correctNumber = getRandomNumber();



let gusses = [];
console.log(gusses)



// **************************************************
// To restart the game
// **************************************************
function InitGame() {

  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  gusses = [];
  displayHistory();

}




// **************************************************
// To get the id of buttons
// **************************************************

function PlayGame() {

  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  console.log(numberGuess);
  guessHistory(numberGuess);
  displayHistory();
  return numberGuess;

}

// **************************************************
// To display result high or low or exact match
// **************************************************


function displayResult(numberGuess) {

  if (numberGuess > correctNumber) {
    showNumberAbove();
  }
  if (numberGuess == correctNumber) {
    showYouWon();
  }
  if (numberGuess < correctNumber) {
    showNumberBelow();
  }

}


// **************************************************
// function to show dailog box
// **************************************************

function getDailogBox(dailogType, text) {

  let dailog;
  switch (dailogType) {

    case "warning":
      dailog = "<div class='alert alert-warning' role='alert'>";
      break;

    case "won":
      dailog = "<div class='alert alert-success' role='alert'>";
  }

  dailog += text;
  dailog += "</div>";
  return dailog;
}



// **************************************************
// To show if you succeed
// **************************************************

function showYouWon() {
  const text = "Awesome job you got the number";
  let dailog = getDailogBox("won", text);
  document.getElementById("result").innerHTML = dailog;
}

// **************************************************
// To show if you got high number
// **************************************************

function showNumberAbove() {
  const text = "the number" + " is too high";
  let dailog = getDailogBox("warning", text);
  document.getElementById("result").innerHTML = dailog;
}

// **************************************************
// To show if you got low number
// **************************************************

function showNumberBelow() {
  const text = "the number" + " is too low";
  let dailog = getDailogBox("warning", text);
  document.getElementById("result").innerHTML = dailog;
}

// **************************************************
// To calculate the random numbers.
// **************************************************

function getRandomNumber() {

  let randomNumber = Math.random() * 100;
  let wholeNumber = Math.floor(randomNumber) + 1;

  return wholeNumber;
}


// **************************************************
// function to save guess history
// **************************************************

function guessHistory(guess) {

  let num = guess;
  gusses.push(num);


}

// **************************************************
// function to save display history
// **************************************************

function displayHistory() {
  let index = gusses.length - 1;

  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list += "<li class='list-group-item'>" + "you guessed " + gusses[index] + "</li>";
    index -= 1;
  }

  list += "</ul>";
  document.getElementById("history").innerHTML = list;

}


// **************************************************
// function to prevent inspect
// **************************************************
document.addEventListener('keydown', function () {
  if (event.keyCode == 123) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("This function has been disabled to prevent you from stealing my code!");
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
    alert("This function has been disabled to prevent you from stealing my code!");
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function () {
    alert("This function has been disabled to prevent you from stealing my code!");
    window.event.returnValue = false;
  });
}