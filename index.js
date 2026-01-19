let gameDiv = document.getElementById("game-Div")
const startBtn = document.getElementById("start-Btn")
const restartBtn = document.getElementById("restart-Game")
const emptySound = new Audio('revolver sounds/emptyslot.mp3')
const fireSound = new Audio('revolver sounds/fireSound.mp3')
let deathText = document.getElementById("deathTxt")
restartBtn.disabled = true

startBtn.addEventListener("click", function(){  

let random = Math.floor(Math.random()*6 + 1)    
let img = document.getElementById("revolver-cylinder")


        if (random === 1 ){
            img.src = "revolver cylinder images/slot1.png"
            emptySound.play()
        }else if (random === 2 ){
            img.src = "revolver cylinder images/slot2.png"
            emptySound.play()
        }else if (random === 3 ){
            img.src = "revolver cylinder images/slot3.png"
            emptySound.play()
        }else if (random === 4 ){
            img.src = "revolver cylinder images/slot4.png"
            emptySound.play()
        }else if (random === 5 ){
            img.src = "revolver cylinder images/slot5.png"
            emptySound.play()
        }else if (random === 6 ){
            img.src = "revolver cylinder images/slot6.png"
            fireSound.play()
            startBtn.disabled = true
            restartBtn.disabled = false
            deathText.textContent = "You died"
        }

})