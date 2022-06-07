
// Event Listeners
  document.body.addEventListener('click', gameStartCheck)

// Global Values

  const totalNumber = 25;
  let numberArray = [];
  let deltaTime = 0;
  let rupeeAdd = "";
  let newRupeeTotal = "";

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

// WIP LOOP - How to Make?

// function gameStartCheck() {
//   if (document.querySelector('.box1') === null) {
//     console.log("Game hasn't started");
//   } else {
//     const correctColor = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
//     console.log('Game has started!')
//
//       for (i = 1; i <= totalNumber; i++) {
//         let boxSelector = document.querySelector(`.box${i}`).style.backgroundImage;
//
//         let previousBox = i - 1;
//         let previousBoxSelector = document.querySelector(`.box${previousBox}`);
//
//         if (i == 1) {
//           document.querySelector(`.box${i}`).onclick = function() {
//             document.querySelector(`.box${i}`).style.backgroundImage = correctColor;
//           }
//         } else {
//             if (document.querySelector(`.box${previousBox}`).style.background == correctColor) {
//               document.querySelector(`.box${i}`).onclick = function() {
//                 document.querySelector(`.box${i}`).style.backgroundImage = correctColor;
//               }
//             } else {
//                 document.querySelector(`.box${i}`).addEventListener('mousedown', wrongBox)
//                   function wrongBox() {
//                     document.querySelector(`.box${i}`).classList.add('incorrectbox');
//                   }
//             }
//         }
//       }
//     }
//   }

  // const gameStartCheck = document.querySelector('.box1') vs writing it out ?;


  // THIS BOX SELECTOR WORKS

function gameStartCheck() {
    //First click doesn't work, don't think box has loaded yet. Value is null when trying to click. why?
    document.querySelector('.box1').onclick = function() {

      document.querySelector('.box1').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
      document.querySelector('.box1').style.color = 'white';
      document.querySelector('.box1').addEventListener('mousedown', correctBoxShading)
      function correctBoxShading() {
          document.querySelector('.box1').classList.add('correctbox');
      }
    }

    document.querySelector('.box2').onclick = function() {

      if (document.querySelector('.box1').style.color == 'white') {

        document.querySelector('.box2').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box2').style.color = 'white';
        document.querySelector('.box2').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box2').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box2').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box2').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box3').onclick = function() {

      if (document.querySelector('.box2').style.color == 'white') {

        document.querySelector('.box3').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box3').style.color = 'white';
        document.querySelector('.box3').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box3').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box3').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box3').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box4').onclick = function() {

      if (document.querySelector('.box3').style.color == 'white') {

        document.querySelector('.box4').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box4').style.color = 'white';
        document.querySelector('.box4').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box4').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box4').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box4').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box5').onclick = function() {

      if (document.querySelector('.box4').style.color == 'white') {

        document.querySelector('.box5').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box5').style.color = 'white';
        document.querySelector('.box5').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box5').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box5').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box5').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box6').onclick = function() {

      if (document.querySelector('.box5').style.color == 'white') {

        document.querySelector('.box6').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box6').style.color = 'white';
        document.querySelector('.box6').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box6').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box6').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box6').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box7').onclick = function() {

      if (document.querySelector('.box6').style.color == 'white') {

        document.querySelector('.box7').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box7').style.color = 'white';
        document.querySelector('.box7').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box7').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box7').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box7').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box8').onclick = function() {

      if (document.querySelector('.box7').style.color == 'white') {

        document.querySelector('.box8').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box8').style.color = 'white';
        document.querySelector('.box8').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box8').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box8').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box8').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box9').onclick = function() {

      if (document.querySelector('.box8').style.color == 'white') {

        document.querySelector('.box9').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box9').style.color = 'white';
        document.querySelector('.box9').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box9').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box9').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box9').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box10').onclick = function() {

      if (document.querySelector('.box9').style.color == 'white') {

        document.querySelector('.box10').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box10').style.color = 'white';
        document.querySelector('.box10').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box10').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box10').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box10').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box11').onclick = function() {

      if (document.querySelector('.box10').style.color == 'white') {

        document.querySelector('.box11').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box11').style.color = 'white';
        document.querySelector('.box11').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box11').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box11').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box11').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box12').onclick = function() {

      if (document.querySelector('.box11').style.color == 'white') {

        document.querySelector('.box12').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box12').style.color = 'white';
        document.querySelector('.box12').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box12').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box12').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box12').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box13').onclick = function() {

      if (document.querySelector('.box12').style.color == 'white') {

        document.querySelector('.box13').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box13').style.color = 'white';
        document.querySelector('.box13').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box13').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box13').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box13').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box14').onclick = function() {

      if (document.querySelector('.box13').style.color == 'white') {

        document.querySelector('.box14').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box14').style.color = 'white';
        document.querySelector('.box14').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box14').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box14').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box14').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box15').onclick = function() {

      if (document.querySelector('.box14').style.color == 'white') {

        document.querySelector('.box15').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box15').style.color = 'white';
        document.querySelector('.box15').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box15').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box15').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box15').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box16').onclick = function() {

      if (document.querySelector('.box15').style.color == 'white') {

        document.querySelector('.box16').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box16').style.color = 'white';
        document.querySelector('.box16').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box16').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box16').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box16').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box17').onclick = function() {

      if (document.querySelector('.box16').style.color == 'white') {

        document.querySelector('.box17').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box17').style.color = 'white';
        document.querySelector('.box17').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box17').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box17').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box17').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box18').onclick = function() {

      if (document.querySelector('.box17').style.color == 'white') {

        document.querySelector('.box18').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box18').style.color = 'white';
        document.querySelector('.box18').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box18').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box18').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box18').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box19').onclick = function() {

      if (document.querySelector('.box18').style.color == 'white') {

        document.querySelector('.box19').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box19').style.color = 'white';
        document.querySelector('.box19').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box19').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box19').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box19').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box20').onclick = function() {

      if (document.querySelector('.box19').style.color == 'white') {

        document.querySelector('.box20').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box20').style.color = 'white';
        document.querySelector('.box20').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box20').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box20').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box20').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box21').onclick = function() {

      if (document.querySelector('.box20').style.color == 'white') {

        document.querySelector('.box21').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box21').style.color = 'white';
        document.querySelector('.box21').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box21').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box21').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box21').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box22').onclick = function() {

      if (document.querySelector('.box21').style.color == 'white') {

        document.querySelector('.box22').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box22').style.color = 'white';
        document.querySelector('.box22').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box22').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box22').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box22').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box23').onclick = function() {

      if (document.querySelector('.box22').style.color == 'white') {

        document.querySelector('.box23').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box23').style.color = 'white';
        document.querySelector('.box23').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box23').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box23').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box23').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box24').onclick = function() {

      if (document.querySelector('.box23').style.color == 'white') {

        document.querySelector('.box24').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box24').style.color = 'white';
        document.querySelector('.box24').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box24').classList.add('correctbox');
        }
      } else {
          document.querySelector('.box24').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box24').classList.add('incorrectbox');
          }
      }
    }

    document.querySelector('.box25').onclick = function() {

      if (document.querySelector('.box24').style.color == 'white') {

        document.querySelector('.box25').style.backgroundImage = 'radial-gradient(circle, rgba(46,130,18,1) 15%, rgba(53,149,21,1) 65%, rgba(59,170,23,1) 96%)';
        document.querySelector('.box25').style.color = 'white';
        document.querySelector('.box25').addEventListener('mousedown', correctBoxShading)
        function correctBoxShading() {
            document.querySelector('.box25').classList.add('correctbox');
        gameFinish();
        }
      } else {
          document.querySelector('.box25').addEventListener('mousedown', wrongBox)
          function wrongBox() {
            document.querySelector('.box25').classList.add('incorrectbox');
          }
      }
    }

}

// Timer

let stopTime = true
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
  deltaTime = ((endingTime - startingTime - 3000) / 1000);
  console.log(deltaTime);
  console.log((endingTime - startingTime - 3000) / 1000);
  gameReward();
}

function gameReward() {
;
  const sectionReward = document.createElement('section')
  const sectionRewardTime = document.createElement('section')
  sectionRewardTime.innerHTML = `<span>${deltaTime} seconds</span>`
  sectionRewardTime.className = 'timer'
  const sectionRewardRupee = document.querySelector('section');
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
  // document.querySelector('.box3').onclick = function() {
  //
  //   if (document.querySelector('.box2').style.color == 'white') {
  //     document.querySelector('.box3').style.backgroundColor = 'rgba(255,0,0,1)';
  //     document.querySelector('.box3').style.color = 'white';
  //   }
  //
  // }


// Breakpoints.
  // breakpoints({
  //   xlarge:  [ '1201px',  '1800px' ],
  //   large:   [ '1025px',  '1200px' ],
  //   medium:  [ '769px',   '1024px' ],
  //   small:   [ '481px',   '768px'  ],
  //   xsmall:  [ null,      '480px'  ],
  // });


  // randomNumberBoxArray.forEach(function(arrValue) {
  // document.querySelector('.gamecontainer').innerHTML += `<section class="${arrValue} box align-center align-middle"><span>${arrValue.substring(3)}</span></section>`
  // })
