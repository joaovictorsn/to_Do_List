let text = document.getElementById("txt");

function recebeTxtInDiv(){
    let scopoTask = document.getElementById("activits");
    scopoTask = recebeTxt(); 
    return scopoTask;
}

let table = document.getElementById("table-content");
    

document.getElementById("btn-tarefa").addEventListener("click",()=>{
    // document.getElementById("table-content").innerHTML = table();
    if (( text !== "") && ( text !== null) && ( text !== undefined)){
        let novoItem =
        `
        <div class="time">
        Data/Hora Inicio
        <input type="time" id="inicio" class="input_time">
        Data/Hora Fim
        <input type="time" id="fim" class="input_time"> 
        </div>
        <div id="activits">
            ${text.value}
        </div>
        <div class="btn-del-did">
            <button class="delete">
                <img src="./imagens/delete-circle-outline-black.png" alt="delete">
            </button>
            <button class="check">
                <img src="./imagens/check.png" alt="check">
            </button>
        </div> 
        `
        table.innerHTML += novoItem;

        //Zerar os Campinhos
        text.value = "";
        text.focus();
    }
})