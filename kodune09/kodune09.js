document.querySelector("#sisend").onclick = function() {
    if(document.querySelector("#todolist input").value.lenght == 0){
        alert("Palun sisesta uus ülesanne")
    }
    else {
        document.querySelector("#valjund").innerHTML += 
        <div class="valjund">
            <span id="uus ulesanne">
            ${document.querySelector("#todolist input").value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        ;

        var current_task = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.lenght; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
   