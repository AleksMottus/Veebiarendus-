let varvid =["roheline", "punane", "sinine"]


function valjastaTekst(sisendTekst) {
    let valjundElement = document.getElementById("valjund")
    valjundElement.innerHTML += "<div>" + sisendTekst + "</div>"
    console.log(sisendTekst)
}

function varviArvamine() {
    let sisendTekst= document.getElementById("sisend").value
    if (varvid.includes(sisendTekst)) {
        valjastaTekst("Arvasid ära! Tubli! Kõik minu lemmikvärvid on : ")
        for(let index = 0; index < varvid.length; index++){
            valjastaTekst( (index + 1)  + ". " + varvid[index] )
        }
    } else {
        valjastaTekst("Värv " + sisendTekst + " ei ole minu lemmikvärv")
    }
}

