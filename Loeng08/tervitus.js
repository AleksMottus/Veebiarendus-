let kasutajaNimi = ""
while (kasutajaNimi == "") {
    kasutajaNimi = prompt("sisesta nimi")
} 
let tervitus = "Tere <strong>" + kasutajaNimi + "</strong>"

let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi.length == 0) {
    tervitus = "Sul jäi nimi sisestamata"
}
if (kasutajaNimi == "aleks") {
    tervitus = "No tere hommmikust Aleksikene"
}
tervitus = tervitus + "<h2>Tähed sinu nimes</h2>"

tervitusElement.innerText = tervitus
console.log(tervitus)

for (let index = 0; index < kasutajaNimi.length; index++) {
    tervitus += "<div>Täht nr " + index + kasutajaNimi[index] + "</div>"
}
