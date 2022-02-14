
let ylesanded = [taskTekst,tahtsusTekst,aegTekst]


function looylesanne(ylesanne) {
  let taskTekst = document.getElementById("ylsisend").value
  let tahtsusTekst = document.getElementById("tahtsus").value
  let aegTekst = document.getElementById("tahtaeg").value
  document.getElementById("ylkoht").innerHTML = "Ülesanne : " + taskTekst
  document.getElementById("tahtsuskoht").innerHTML ="Ülesande tähtsus: " + tahtsusTekst
  document.getElementById("aegkoht").innerHTML = "Täitmise tähtaeg: " + aegTekst
  ylesanded.push(ylesanne)
  naitaylesandeid()
}
function naitaylesandeid(){
let valjundElement = document.getElementById("valjundelement")
let valjundHTML = ''
    for (let i = 0; i < ylesanded.length; i++) {
        valjundHTML+= looylesanne(ylesanded[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML
  }
