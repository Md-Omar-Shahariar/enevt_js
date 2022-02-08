function makeRed() {
    document.body.style.backgroundColor = "REd";
  }
const blueButton = document.getElementById("blue-button")
blueButton.onclick = makeBlue

function makeBlue(){
        document.body.style.backgroundColor = "blue"
    }
const greenButton = document.getElementById("make-green")

greenButton.onclick = function (){
        document.body.style.backgroundColor= "green"
    }