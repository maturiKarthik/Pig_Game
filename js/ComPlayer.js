import Player from "./Player.js";

class ComPlayer extends Player {
    count = 1000
    constructor() {
        super();
    }

    play() {
        this.count += 5000
        this.num = this.rollNum()
        console.log("Dice num", this.num, this.count)
         
        this.interval = window.setTimeout(() => {
            if (this.num != 1) {
                this.play()
                this.setCurrentScore(this.num)
                params = this.setCurrentScore()
            } else {
                console.log("Stop .. ")
                clearTimeout(this.interval)
                return

            }
        } , 6000);


    }

    getComCurrentScore(){
        return this.setCurrentScore()
    }

}


export default ComPlayer