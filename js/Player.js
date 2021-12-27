import Dice from "./Dice.js";

class Player extends Dice {
    currentScore = 0
    totalScore = 0

    constructor() {
        super();
        //console.log("Player init")
    }

    // Set the current score
    setCurrentScore(diceValue) {
        if (diceValue != 1 && diceValue != null) {
            this.currentScore += diceValue
        } else {
            this.currentScore = 0
        }
        return this.currentScore
    }

    // Set the total Score
    setTotalScore() {
        this.totalScore += this.currentScore
        this.currentScore = 0
        return this.totalScore
    }

}

export default Player