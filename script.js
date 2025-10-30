const masage = document.querySelector(".masage-js");
const masageText = document.querySelector(".masage-js-text");

let time = 0;

const onEveryIntervalSecjndPast = () => {
  time += 1;
  console.log(time);
  masageText.textContent = time;

  if (time % 1000 === 0) {
    masage.classList.add("visible");
  } else if (time >= 5000) {
    clearInterval(intervalId);
  } else if (time % 1000 !== 0) {
    masage.classList.remove("visible");
  }
  //   masage.classList.add("visible");

  //   if (time % 2 === 0) {
  //     masage.classList.remove("visible");
  //   } else if (time >= 5) {
  //     clearInterval(intervalId);
  //   }
};

// const intervalId = setInterval(onEveryIntervalSecjndPast, 1);

// task 2

const doe = document.querySelector(".doe");
const doe2 = document.querySelector(".doe2");

const onIntervalAnimation = () => {
  time += 1;
  console.log(time);
  if (time === 3) {
    doe.style.height = "340px";
    doe.classList.add("position1");
    doe2.classList.add("position2");
  } else if (time === 4) {
    doe.style.height = "330px";
  } else if (time === 5) {
    doe.style.height = "320px";
    doe2.classList.add("position3");
  } else if (time === 6) {
    doe.style.height = "310px";
  } else if (time === 7) {
    doe.style.height = "300px";
    doe2.classList.add("position4");
  } else if (time === 8) {
    doe.style.height = "290px";
  } else if (time === 9) {
    doe.style.height = "280px";
    doe2.classList.add("position5");
  } else if (time === 10) {
    doe.style.height = "270px";
  } else if (time === 11) {
    doe.style.height = "260px";
    doe2.classList.add("position6");
  } else if (time === 12) {
    doe.style.height = "250px";
  } else if (time === 13) {
    doe.style.height = "240px";
    doe2.classList.add("position7");
  } else if (time === 14) {
    doe.style.height = "230px";
  } else if (time === 15) {
    doe.style.height = "220px";
    doe2.classList.add("position8");
  } else if (time === 16) {
    doe.style.height = "210px";
  } else if (time === 17) {
    doe.style.height = "200px";
    doe2.classList.add("position9");
  } else if (time === 18) {
    doe.style.height = "190px";
  } else if (time === 19) {
    doe.style.height = "180px";
    doe2.classList.add("position10");
  } else if (time === 20) {
    doe.style.height = "170px";
    doe2.classList.add("position11");
  } else if (time === 21) {
    doe.style.height = "160px";
    doe2.classList.add("position12");
  } else if (time === 22) {
    doe.style.height = "150px";
    doe2.classList.add("position13");
  }

  if (time === 23) {
    doe.classList.add("position1");
    clearInterval(intervalAnimationId);
  }
};

const intervalAnimationId = setInterval(onIntervalAnimation, 100);

// task game
const startBtn = document.querySelector(".start_button");
const scoreShown = document.querySelector(".score");
const timeDisplayed = document.querySelector(".time");
const gameList = document.querySelector(".game_list");
const button1 = document.querySelector(".button_1");
const button2 = document.querySelector(".button_2");
const button3 = document.querySelector(".button_3");
const button4 = document.querySelector(".button_4");
const button5 = document.querySelector(".button_5");
const button6 = document.querySelector(".button_6");

let time1 = 30;

const displayTime = () => {
  time1 -= 1;
  console.log(time1);
  timeDisplayed.textContent = `Time left: ${time1}`;
  let randomNum = Math.random() * 5;
  // console.log(randomNum)
  let normalRandomNum = Math.floor(randomNum);
  console.log(normalRandomNum);
  if (normalRandomNum === 0) {
    button1.style.display = "block";
  } else {
    button1.style.display = "none";
  }

  if (normalRandomNum === 1) {
    button2.style.display = "block";
  } else {
    button2.style.display = "none";
  }

  if (normalRandomNum === 2) {
    button3.style.display = "block";
  } else {
    button3.style.display = "none";
  }

  if (normalRandomNum === 3) {
    button4.style.display = "block";
  } else {
    button4.style.display = "none";
  }

  if (normalRandomNum === 4) {
    button5.style.display = "block";
  } else {
    button5.style.display = "none";
  }

  if (normalRandomNum === 5) {
    button6.style.display = "block";
  } else {
    button6.style.display = "none";
  }
};

const showButton = () => {
  const intervalId = setInterval(displayTime, 1000);
  const backUpIntervalId = setInterval(() => {
    if (time1 === 0) {
      clearInterval(intervalId);
      clearInterval(backUpIntervalId);
      gameList.style.display = "none";
      timeDisplayed.style.display = "none";
      scoreShown.style.fontSize = "200px";
      return;
    }
  }, 1000);
  startBtn.style.display = "none";
};

let score = 0;

const onPlayBtnClick = () => {
  score += 10;
  scoreShown.textContent = `Your score ${score}`;
};

startBtn.addEventListener("click", showButton);
button1.addEventListener("click", onPlayBtnClick);
button2.addEventListener("click", onPlayBtnClick);
button3.addEventListener("click", onPlayBtnClick);
button4.addEventListener("click", onPlayBtnClick);
button5.addEventListener("click", onPlayBtnClick);
button6.addEventListener("click", onPlayBtnClick);

const inputForTime = document.querySelector(".input_for_time");
const secondsDisplay = document.querySelector(".seconds");

let seconds = inputForTime.value;

// const showMassega = () => {
//   const timerId = setInterval(() => {
//   seconds -= 1;
//   secondsDisplay.textContent = seconds;

//   if (seconds === inputForTime.value) {
//     clearInterval(timerId);
//     secondsDisplay.textContent = "Hello, i am massage";
//     secondsDisplay.style.fontSize = "50px";
//   }
// }, 1000);
// };

// // const timerId = setInterval(showMassega , 1000)


// inputForTime.addEventListener("input" , showMassega);


const intervalFunction = () => {
seconds -= 1;
if(seconds === 0){
    clearInterval(timerId);
   secondsDisplay.textContent = "Hello, i am massage";
     secondsDisplay.style.fontSize = "50px";
}

}

 let timerId = setInterval(intervalFunction , 1000);

 inputForTime.addEventListener("input" , intervalFunction);