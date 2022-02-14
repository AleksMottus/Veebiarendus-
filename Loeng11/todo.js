const sisuElement = document.getElementById("sisu")

function vahetaTehtudMaarang(ylesandeIndeks){
    console.log("Valiti ülesanne: " + ylesandeIndeks)
    let ylesanne = ylesanded[ylesandeIndeks]
    console.log(ylesanne)
    ylesanne.kasTehtud = !ylesanne.kasTehtud
       valjastakoikylesanded()
    }

function valjastaYlesanne(ylesanne, ylesandeIndeks) {
    let kasTehtud = ""
    let valitud = ""
    if (ylesanne.kasTehtud) {
        kasTehtud = 'class="tehtud"'
        valitud = "checked"
    }

    sisuElement.innerHTML += `
    <div class="ylesanne">
    <input type="checkbox" ${valitud} onclick="vahetaTehtudMaarang(${ylesandeIndeks})">
        <div>Olulisus: ${ylesanne.olulisus}</div>
        <div ${kasTehtud}>${ylesanne.kirjeldus}</div>
    </div>
    `
}

const ylesanded = [
    {
        kirjeldus: "Pese hambad",
        kasTehtud: true,
        olulisus: 8
    },
    {
        kirjeldus: "Hommikvõimlemine",
        kasTehtud: true,
        olulisus: 7
    },
    {
        kirjeldus: "Hommikusöök",
        kasTehtud: false,
        olulisus: 8
    },
]
function valjastakoikylesanded(){
    sisuElement.innerHTML=""
    for (i = 0; i < ylesanded.length; i++) {
        const ylesanne = ylesanded[i]
        valjastaYlesanne(ylesanne, i)
    }
}

valjastakoikylesanded()