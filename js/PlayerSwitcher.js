/** @format */

import Player from "./Player.js";

class PlayerFactory {
  computer_player = false;
  player = new Player();
  computer = new Player();
  constructor() {
    //console.log("Player Factory init")
  }

  getPlayer() {
    if (this.computer_player === true) {
      return this.computer;
    }
    return this.player;
  }

  setCPlayer(status) {
    this.computer_player = status;
  }

  getCPlayer() {
    return this.computer_player;
  }
}

export default PlayerFactory;
