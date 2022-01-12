/** @format */

import Dice from "./Dice.js";

class Player extends Dice {
  currentScore = 0;
  totalScore = 0;

  constructor() {
    super();
  }

  // Set the current score
  setCurrentScore(diceValue) {
    if (diceValue != 1 && diceValue != null) {
      this.currentScore += diceValue;
    } else {
      console.log(
        "player class",
        diceValue,
        "current_score",
        this.currentScore
      );
      this.currentScore = 0;
    }
    return this.currentScore;
  }

  // Set the total Score
  setTotalScore() {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
    return this.totalScore;
  }
}

export default Player;
