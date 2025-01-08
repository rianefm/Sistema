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
        return `ID: ${this.id}| Descrição: ${this.descricao}| Status: ${status}| Data  de criação: ${this.dataCriacao.toLocaleDateString()}`;
    }

}









//5.função anônima para manipular eventos

const botaoAdicionar = document.querySelector("#add-button");
const listaDeTarefas = [];

//evento no clique 

botaoAdicionar.addEventListener("click", function () {
    const inputTarefa = document.querySelector("#input");
    const novaTarefa = {
        descricao: inputTarefa.value,
        concluida: false

    }

    listaDeTarefas.push(novaTarefa);
    inputTarefa.value = "";
    alert("Tarefa adicionada com sucesso: ", novaTarefa);

    const 

});



















//Lista de Tarefas

class Tarefa {
    constructor(id, descrição, concluida) {
        this.id = id
        this.descricao = descricao
        this.concluida = concluida
    }
}

class ListaDeTarefas {
    constructor() {
        this.tarefas = []
    }
    
    adicionarTarefidarefa) {
    this.tarefas.h(tarefa)
}

removerTarefas(concluida) {
    return
this.tarefas.filter(tarefa => tarefa.concluida = concluida
    }

    exibirTarefas(elemento) {
        if (elemento) {
            elemento.innerHTML= ""
        }
    }Tarefa(tarefa) {
    this.tarefas =
        this.tarefas.filter(tarefa => tarefa.id !== id)
}
    
ra
r saferaT
}




















//Formatação de data

const dataFormatada = new Intl.DataTimeFormat('pt-BR', {
    da

timeStyle: 'shor  t'  ,.formatt(tarefa.dataCriacao);

li.innerHTML = `<strong>${tarefa.titulo}</strong>
<span></s`rohs''        : elytSe
})




