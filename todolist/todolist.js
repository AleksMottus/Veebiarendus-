function looTask(vaiketask){
  return`
  <div>Ülesanne:${task.sisu} Tähtaeg: ${task.tahtaeg}</div>

  `
  
}
let task = []

function lisaTask(vaiketask){
  let sisuTekst = document.getElementById("tasksisse")
  let tahtaegTekst = document.getElementById("tahtaegsisse")
  let vaiketask = {
    sisu: sisuTekst,
    tahtaeg: tahtaegTekst,
  }

  task.push(vaiketask)
}

function naitaTaski(){
  let valjundElement = document.getElementById("valjund")
  let valjundHTML = ''
  valjundHTML += '<div class="task">'
  for (let i = 0; i< task.length; i++){
    valjundHTML+= looTask(task[i])
  }
  valjundHTML+='</div>'
  valjundElement.innerHTML = valjundHTML
}

naitaTaski()