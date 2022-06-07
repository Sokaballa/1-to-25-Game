
// Event Listeners
  
document.querySelector('.gamecontainer').addEventListener('click', getSelectedBox)
document.querySelector('.gamecontainer').addEventListener('click', gameStartCheck)

// Global Values

  const totalNumber = 25;
  let numberArray = [];
  let deltaTime = 0;
  let stopTime = true
  let rupeeAdd = "";
  let newRupeeTotal = "";
  let currentBox = ""
  let currentBoxNumber = ""
  let oldBoxNumber = ""

// Number Randomizer Array and Random Array Creator

function randomCreator() {
  do {
    const randomNumber = Math.floor((Math.random() * totalNumber)) + 1;
    if (!numberArray.includes(randomNumber)) {
      numberArray.push(randomNumber);
    }
  } while (numberArray.length < totalNumber);

  let randomNumberBoxArray = numberArray.map(boxNumber => `box${boxNumber}`)
  console.log(numberArray)
  console.log("Game has started!")

  randomNumberBoxArray.forEach(function(arrValue) {

    const section = document.createElement('section');
    section.className += `${arrValue} boxselected align-center align-middle`
    section.innerHTML += `<span>${arrValue.substring(3)}</span>`;
    document.querySelector('.gamecontainer').appendChild(section);

  })

  startTimer();

}

// Game Start Button Disappearing 3 Seconds After Clicking

document.querySelector('button').onclick = function() {
    document.querySelector('button').style.display = "none";
    if (document.querySelector('.boxreward') != null) {
      document.querySelector('.boxreward').remove()
      document.querySelector('.timer').remove()
      document.querySelector('.rupeeboxreward').remove();
    }
    setTimeout(randomCreator, 3000);
}

// Get selected box from user

function getSelectedBox() {
  console.log()
  currentBox = event.target.className.split(' ')[0]
  currentBoxNumber = currentBox.substring(3)
  oldBoxNumber = `${currentBoxNumber - 1}`

}

// Check to see whether the box selected is correct or not.
// Still in the process of adding a red color to selections
// that are invalid.

function gameStartCheck() {
  console.log(currentBox)
  console.log(currentBoxNumber)
  console.log(oldBoxNumber)

  // function wrongBox() {
  //   document.querySelector(`.${currentBox}`).classList.add('incorrectbox');
  // }

  // function wrongBoxUnpress() {
  //   document.querySelector(`.${currentBox}`).classList.remove('incorrectbox')
  // }

  if (currentBox === 'box1') {
    document.querySelector(`.box1`).style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
    document.querySelector(`.box1`).style.color = 'white';

  } else if (document.querySelector(`.box${oldBoxNumber}`).style.color == 'white') {
        document.querySelector(`.${currentBox}`).style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector(`.${currentBox}`).style.color = 'white';

  } else {
        // document.querySelector(`.${currentBox}`).addEventListener('mousedown', wrongBox)
        // document.querySelector(`.${currentBox}`).addEventListener('mouseup', wrongBoxUnpress)
  }

  //Finally, reset selected box.

  currentBoxNumber = ""
  currentBox = ""
  oldBoxNumber = ""
}

// Timer

let startingTime = ""
let endingTime = ""

function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
    endingTime = Date.now()
  }
}

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    startingTime = Date.now()
  }
}

// Game Finish

function gameFinish() {
  stopTimer()
  for (i = 1; i <= totalNumber; i++) {
    document.querySelector(`.box${i}`).remove()
  }
  setTimeout(gameResult, 3000)
}

// Game Results

function gameResult() {
  randomNumberBoxArray = [];
  numberArray = [];
  document.querySelector('button').style.display = 'block';
  deltaTime = ((endingTime - startingTime) / 1000);
  console.log(deltaTime);
  console.log((endingTime - startingTime) / 1000);
  gameReward();
}

// Game Rewards

function gameReward() {
  const sectionReward = document.createElement('section')
  const sectionRewardTime = document.createElement('section')
  sectionRewardTime.innerHTML = `<span>${deltaTime} seconds</span>`
  sectionRewardTime.className = 'timer'
  const sectionRewardRupee = document.querySelector('section')
  sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
  sectionRewardRupee.className = 'rupeereward'

  if (deltaTime < 15) {
    rupeeAdd = 150
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward bestreward'
    sectionReward.innerHTML = "<span>You are a number-picking master!</span>"
  } else if (deltaTime >= 15 && deltaTime < 20) {
    rupeeAdd = 80
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward greatreward'
    sectionReward.innerHTML = "<span>You are nearly a master! Keep trying!</span>"
  } else if (deltaTime >= 20 && deltaTime < 25) {
    rupeeAdd = 50
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward goodreward'
    sectionReward.innerHTML = "<span>Your skills are decent, but you can still improve!</span>"
  } else if (deltaTime >= 25 && deltaTime < 35) {
    rupeeAdd = 35
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward okayreward'
    sectionReward.innerHTML = "<span>Not a bad effort! Keep working at it!</span>"
  } else if (deltaTime >= 35 && deltaTime < 45) {
    rupeeAdd = 20
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward badreward'
    sectionReward.innerHTML = "<span>Good try! Your skills have room to grow.</span>"
  } else {
    rupeeAdd = 10
    sectionRewardRupee.innerHTML =`<span>+${rupeeAdd} Rupees</span>`
    sectionRewardRupee.className = 'rupeeboxreward'
    newRupeeTotal = parseInt(document.querySelector('.rupeevalue').innerHTML) + rupeeAdd;
    document.querySelector('.rupeevalue').innerHTML = newRupeeTotal;
    sectionReward.className = 'boxreward worstreward';
    sectionReward.innerHTML = "<span>That was a practice round... Now you're ready to try again!</span>"
  }
  document.querySelector('.gamecontainer').appendChild(sectionRewardTime);
  document.querySelector('.gamecontainer').appendChild(sectionReward);
  document.querySelector('.gamecontainer').appendChild(sectionRewardRupee);

}

// Breakpoints.
  // breakpoints({
  //   xlarge:  [ '1201px',  '1800px' ],
  //   large:   [ '1025px',  '1200px' ],
  //   medium:  [ '769px',   '1024px' ],
  //   small:   [ '481px',   '768px'  ],
  //   xsmall:  [ null,      '480px'  ],
  // });