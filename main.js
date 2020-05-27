class List {
    constructor(){
        this.data = []
    }
}

class TodoList extends List {
    constructor(){
        this.todos = []
    }

    addTodo(){
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}


const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = () =>{
    MinhaLista.addTodo()
}