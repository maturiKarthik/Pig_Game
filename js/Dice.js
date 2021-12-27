class Dice {
    constructor() {
       // console.log("Dice init")
    }

    rollNum() {
        return Math.floor(Math.random() * 6) + 1
    }
}

export default Dice