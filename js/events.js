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

//Event Listener
const goldenRod = document.getElementById('make-goldenrod')
goldenRod.addEventListener('click', makeGoldenRod)

function makeGoldenRod(){
document.body.style.backgroundColor = 'goldenrod'
}
// addEventListener
const hotPink = document.getElementById('make-hotpink')
hotPink.addEventListener('click', function(){
document.body.style.backgroundColor = 'hotpink'
})    
document.getElementById('make-lightblue').addEventListener('click', function(){
    document.body.style.backgroundColor = "lightblue"
})  