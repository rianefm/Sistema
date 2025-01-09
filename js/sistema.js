// 3. Orientação a Objetos (OOP)
// classe Tarefa
class Tarefa {
    static contadorId = 1;

    constructor(descricao) {
        this.id = Tarefa.contadorId++;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }
    //métodos da classe
    marcarConcluida() {
        this.concluida = true;
    }

    toString() {
        const status = this.concluida ? "Concluída" : "Pendente";
        //Formatação de data
        const dataFormatada = new Intl.DataTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(tarefa.dataCriacao);
        return `ID: ${this.id}| Descrição: ${this.descricao}| Status: ${status}| Data  de criação: ${this.dataCriacao.toLocaleDateString()}`;
    }

}



//5.função anônima para manipular eventos

const botaoAdicionar = document.querySelector("#add-button");
const listaDeTarefas = [];
const ulTarefas = document.getElementById('listaDeTarefas');


//evento no clique 


//function para renderizar 

function renderizarTarefas(filter = "all"){
    ListaDeTarefas.innerHTML = "",

    let tarefasFiltradas = listaDeTarefas;

    

}

botaoAdicionar.addEventListener("click", function () {
    const inputTarefa = document.querySelector("#input");
    if {
        const novaTarefa = new Tarefa(descricao);
        listaDeTarefas.push(novaTarefa);
        atualizarListaTarefas(listaDeTarefas);
        inputTarefa.value = "";
        alert("Tarefa adicionada com sucesso: " + novaTarefa.descricao);
} else {
    alert("Descrição deve ser adicionada!");
}
   
    
});


// filtrar tarefas concluídas
const tarefasConcluidas = listaDeTarefas.filter(function (tarefa) {
    return tarefa.concluida === true;

});

const botaoEditar = document.createElement("button");
botaoEditar.textContent = "Editar";
botaoEditar.addEventListener("click", function () {
    const novaDescricao = alert("Edite a tarefa: ", tarefa.descricao);
    if (novaDescricao !== null && novaDescricao.trim() !== "") {
        tarefa.descricao = novaDescricao.trim();
        renderizarTarefas(filter);
    }
})

//4.Lista de Tarefas

class tarefas {
    constructor(id, descrição, concluida) {
        this.id = id;
        this.descricao = descricao;
        this.concluida = concluida;
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefas(tarefas) {
        this.tarefas.push(tarefas)
    }

    removerTarefas(id) {
        this.tarefas =
            this.tarefas.filter(tarefas => tarefas.id !== id);
    }

    filtrarTarefas(concluida) {
        return this.tarefas.filter(tarefas => tarefas.concluida === concluida);
    }

    exibirTarefas(elemento) {
        if (elemento) {
            elemento.innerHTML = '';
            this.tarefas.forEach(tarefas => {
                const li = document.createElement('li');
                li.textContent = `${tarefas.descricao} - Concluída: ${tarefas.concluida}`;
                elemento.appendChild(li);
            });
        } else {
            console.log(this.tarefas);
        }
    }
}























// do que é? 6?
/*li.innerHTML =  `<strong>${tarefa.descricao}</strong>
                <span>(Criada em: ${dataFormatada})</span>`;*/