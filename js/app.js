
import PlayerFactory from "./PlayerSwitcher.js"
import ComPlayer from "./ComPlayer.js"

// UI- DOM - dice_img
const dice_img = document.getElementById("dice_img")
//Button
const roll_bt = document.getElementById("bt_roll")
const hold_bt = document.querySelector(".bt_hold")
// Player score
const sm_score = document.querySelector(".sm_score")
const score = document.querySelector(".t_score")
// computer score
const sm_c_score = document.querySelector(".sm_c_score")
const c_score = document.querySelector(".t_c_score")
//Player Factory
const playerFactory = new PlayerFactory()
//const player_1 = playerFactory.getPlayer()
let test = new ComPlayer()

// roll_dice
roll_bt.addEventListener('click', function () {
    let number = playerFactory.getPlayer().rollNum()
    dice_img.src = "./assets/die_" + number + ".png"
    console.log("Computer state on roll dice", playerFactory.getCPlayer())
    if (playerFactory.computer_player) {
        sm_c_score.innerHTML = playerFactory.getPlayer().setCurrentScore(number)
    } else {
        sm_score.innerHTML = playerFactory.getPlayer().setCurrentScore(number)
    }

    if (number === 1) {
        console.log("Change player and donot add")
    }
    console.log(number)
})




//Hold button 
hold_bt.addEventListener('click', function () {
    comPlay()
    if (playerFactory.getCPlayer()) {
        c_score.innerHTML = playerFactory.getPlayer().setTotalScore()
        sm_c_score.innerHTML = playerFactory.getPlayer().setCurrentScore()
        playerFactory.setCPlayer(false)

    } else {
        score.innerHTML = playerFactory.getPlayer().setTotalScore()
        sm_score.innerHTML = playerFactory.getPlayer().setCurrentScore()
        playerFactory.setCPlayer(true)
    }
})

function comPlay() {
    sm_c_score.innerHTML = playerFactory.getPlayer().setCurrentScore()
    var exec_interval = window.setTimeout(() => {
        //var dice_val = test.rollNum()
        var dice_val = playerFactory.getPlayer().rollNum()
        console.log("CP", dice_val,playerFactory.getPlayer().setCurrentScore())
        if (dice_val != 1) {
            playerFactory.getPlayer().setCurrentScore(dice_val)
            comPlay()
        } else {
            console.log("Stop here")
            window.clearTimeout(exec_interval)
        }
    }, 6000)


    //sm_c_score.innerHTML = test.setCurrentScore()
    //test.play()
}
/*New Game => qs the name goes*/


