let apelsin = {
    liik: "puuvili",
    nimi: "apelsin",
    varv: "orange",
    hinnang: 8,
    pilt: "./assets/apelsin.jpg",
    kirjeldus: "Apelsin on vilja ehituselt mari. Rohkelt eeterlikke õlisid sisaldav koor koosneb oranžist näärmelisest väliskestast (eksokarbist) ja selle all asuvast heledast ja säsikast vahekestast (mesokarbist). Vilja mahlakas sisekest on jaotunud kilejate vaheseintega kümneks sektoriks. Sektorites asuv viljaliha koosneb mesokarbist sissepoole sopistunud pikkadest peenikestest mahlaga täidetud kotikestest. Sektorites asuvad ka apelsini seemned."
}
let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange",
    hinnang: 5,
    pilt: "./assets/porgand.jpg",
    kirjeldus: "Porgand ehk aedporgand ehk söögiporgand (ka kultuurporgand) (Daucus carota sativus, Daucus sativus) on sarikaliste sugukonda porgandi perekonda kuuluv kaheaastane rohttaim. Eestis peetakse söögiporgandit tähtsaks köögiviljaks."
}
let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv: "yellow",
    hinnang: 6,
    pilt: "./assets/banaan.jpg",
    kirjeldus: "Banaani perekonda kuuluvate rohttaimede emasõitest arenevad 3–20-realised kobarad, kus igas reas on kuni 20 vilja. Kobara mass võib olla 30–50 kg ja ühe banaani mass on keskmiselt 125 g. Viljakesta osa vilja massist on 36%. Looduslike banaaniliikide viljad sisaldavad suuri ja kõva kestaga seemneid. Ekspordiks kasvatatavate sortide viljad seemneid tavaliselt ei sisalda, sest need arenevad viljastamata sigimikust (partenokarpsed viljad).[5] Sõltuvalt liigist ja kultivarist võib valminud banaani värvus olla roheline, kollane, pruunikas, oranž või kirju. Pärast viljade valmimist taime maapealsed osad kuivavad, kuid mitmeaastastest maa-alustest võsudest ehk risoomidest kasvavad uued ebavarred.[6]"
}
let mandariin = {
    liik: "puuvili",
    nimi: "mandariin",
    varv: "orange",
    hinnang: 9,
    pilt: "./assets/mandariin.jfif",
    kirjeldus: "Mandariinid on maitselt lähedased apelsinidele. Viljad on suuremad ja paksema koorega kui apelsiinid ja pisut sirge väliskujuga. Punaka varjundiga oranž koor eraldub viljalihast väga kergesti. Koores leidub eeterlikku õli, mida pressitakse; saadust nimetatakse mandariiniõliks. Koor ja seemned moodustavad mandariini massist ligi 26%.[1]"
}
let saadused = [apelsin, porgand, banaan, mandariin]

function looPuuviljaHTML(puuvili) {
    return `
    <div class="col-3 card">
        <img class="card-img-top" src="${puuvili.pilt}"
        <div class="card-body">
        <div class="card-title">${puuvili.nimi}
        <div class="card-text">
        <p>
            Liik: ${puuvili.liik}<br>
             Hinnang :${puuvili.hinnang}
        </p>
            <div>
            ${puuvili.kirjeldus}
            </div>
            </div>
        </div>
    </div>
    `
}


function lisaPuuvili() {
    let nimetusTekst = document.getElementById("nimetus").value
    let liikTekst = document.getElementById("liik").value
    let hinnang = document.getElementById("hinnang").value
    let puuvili = {
        liik: liikTekst,
        nimi: nimetusTekst,
        varv: "orange",
        hinnang: hinnang,
        pilt: "./assets/allfruit.jfif",
        kirjeldus: "Kasutaja sisestatud puuvili"
    }
    saadused.push(puuvili)
    naitaPuuvilju()
}

function naitaPuuvilju() {
    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < saadused.length; i++) {
        valjundHTML+= looPuuviljaHTML(saadused[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML
}

naitaPuuvilju()