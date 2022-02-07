let kasutajaNimi = ""
while (kasutajaNimi == "") {
    kasutajaNimi = prompt("sisesta nimi")
} 
let tervitus = "Tere <strong>" + kasutajaNimi + "</strong>"

let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi.length == 0) {
    tervitus = "Sul jäi nimi sisestamata"
}

if (kasutajaNimi.length > 6) {
    tervitus = "Sul on nii ilus pikk nimi"
}
if (kasutajaNimi.length < 6) {
    tervitus = "Sul on nii ilus lühike nimi"
}
if (kasutajaNimi.length == 6) {
    tervitus = "sul on nii ilus keskmine nimi"
}
tervitusElement.innerHTML = tervitus
console.log(tervitus)


