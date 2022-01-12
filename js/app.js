/** @format */

import PlayerFactory from "./PlayerSwitcher.js";

const dice_img = document.getElementById("dice_img");
const roll_bt = document.getElementById("bt_roll");
const hold_bt = document.querySelector(".bt_hold");
const sm_score = document.querySelector(".sm_score");
const score = document.querySelector(".t_score");
const sm_c_score = document.querySelector(".sm_c_score");
const c_score = document.querySelector(".t_c_score");
const playerFactory = new PlayerFactory();
const player_c = document.querySelector(".player_c");
const new_game = document.querySelector("#new_game");
let com_play_count = 0;

// roll_dice
roll_bt.addEventListener("click", function () {
  let number = playerFactory.getPlayer().rollNum();
  dice_img.src = "./assets/die_" + number + ".png";
  if (playerFactory.computer_player) {
    //sm_c_score.innerHTML = playerFactory.getPlayer().setCurrentScore(number);
  } else {
    sm_score.innerHTML = playerFactory.getPlayer().setCurrentScore(number);
  }

  if (number === 1) {
    playerFactory.setCPlayer(false);
    disableBt(true);
    comPlay();
    console.log("change player");
  }
});

//Hold button
hold_bt.addEventListener("click", function () {
  console.log(playerFactory.getCPlayer());
  if (!playerFactory.getCPlayer()) {
    // Computer will play
    score.innerHTML = playerFactory.getPlayer().setTotalScore();
    sm_score.innerHTML = playerFactory.getPlayer().setCurrentScore();
    playerFactory.setCPlayer(true);
    disableBt(true);
    comPlay();
    console.log("Com play");
  } else {
    disableBt(false);
  }
});

function comPlay() {
  var exec_interval = window.setTimeout(() => {
    var dice_val = playerFactory.getPlayer().rollNum();
    dice_img.src = "./assets/die_" + dice_val + ".png";
    //console.log("CP", dice_val, com_play_count);
    switch (true) {
      case dice_val == 1:
        sm_c_score.innerHTML = playerFactory
          .getPlayer()
          .setCurrentScore(dice_val);
        console.log("Stop here");
        window.clearTimeout(exec_interval);
        com_play_count = 0;
        playerFactory.setCPlayer(false);
        disableBt(false);
        break;
      case com_play_count <= 2:
        sm_c_score.innerHTML = playerFactory
          .getPlayer()
          .setCurrentScore(dice_val);
        com_play_count += 1;
        comPlay();
        break;
      default:
        //no-opt
        sm_c_score.innerHTML = 0;
        c_score.innerHTML = playerFactory.getPlayer().setTotalScore();
        com_play_count = 0;
        playerFactory.setCPlayer(false);
        disableBt(false);

        break;
    }
  }, 2000);
}

function disableBt(state) {
  if (state) {
    player_c.classList.add("play");
    roll_bt.classList.add("bt_disable");
    hold_bt.classList.add("bt_disable");
  } else {
    player_c.classList.remove("play");
    roll_bt.classList.remove("bt_disable");
    hold_bt.classList.remove("bt_disable");
  }
}
/*New Game => qs the name goes*/
new_game.addEventListener("click", () => {
  window.location.reload();
});
