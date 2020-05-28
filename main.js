//ATIVIDADE !
// class Usuario {
//     constructor(email,senha){
//         this.email = email
//         this.senha = senha
//     }
    
// }

// class Admin extends Usuario {
//     super(){

//     }
// }

// const user1 = new Usuario('email@teste.com', 'senha345')
// const admin1 = new Admin('email@teste.com', 'senha3489')

// console.log(user1.email)
// console.log(admin1)

//ATIVIDADE 2

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ]

// const old = usuarios.map(
//     function(old){
//         return old.idade
//     }
// )

// console.log(old)

// const userFilter = usuarios.filter(
//     function(user){
//         if(user.empresa == 'Rocketseat'){
//             console.log(user)
//         }
//     }
// )

// const userFind = usuarios.find(
//     function(user){
//         return user.empresa == 'Google'
//     }
// )

// console.log(userFind)
// const user = [{
//     ...usuarios,
// }]

// const result = usuarios.map(
//     (item) => {
//         let mult = item.idade * 2
//         user.push(mult)
//     }
// )

// const filt = user.filter(
//     (item) => {
//         if(item <= 50){
//             console.log(item)
//         }
//     }
// )

//ATIVIDADE 3

// 3.1
//const arr = [1, 2, 3, 4, 5]
//(arr.map(function(item) {
//return item + 10;
//});)
//ARROW FUNCTION -> const mapeamento = arr.map((item) => item + 10)
//console.log(mapeamento)


// 3.2
// Dica: Utilize uma constante pra function
//const usuario = { nome: 'Diego', idade: 23 }
// function mostraIdade(usuario) {
//  return usuario.idade
// }
// mostraIdade(usuario)
//ARROW FUNCTION -> const mostraIdade = (usuario) => usuario.idade
//console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma constante pra function
//  const nome = "Diego"
//  const idade = 23
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade }
// }
// mostraUsuario(nome, idade)
// mostraUsuario(nome)

//ARROW FUNCTION -> 
// const mostraUsuario = (nome = 'Diego', idade = 18) => { nome, idade }
// console.log(mostraUsuario.nome)
// console.log(mostraUsuario.idade)

// 3.4
//ARROW FUNCTION ->
// const promise = () => new Promise((resolve, reject)=> resolve())
// console.log(promise())

//ATIVIDADE 4
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
// }

// const { nome, endereco:{cidade, estado}} = empresa

// console.log(nome, cidade, estado)

// let user = { nome: 'Diego', idade: 23 }

// function mostraInfo(user){ 
//     this.nome = user.nome
//     this.idade = user.idade
//     return `${nome} tem ${idade} anos`
// }

// console.log(mostraInfo(user))

//ATIVIDADE 5
const arr = [1, 2, 3, 4, 5, 6]



console.log(arr)



//ATIVIDADE 6
// const usuario = 'Diego'
// const idade = 23
// console.log(`O usuário ${usuario} possui ${idade} anos`)

//ATIVIDADE 7
// const nome = 'Diego';
// const idade = 23;
// const usuario = {
//  nome,
//  idade,
//  cidade: 'Rio do Sul'
// }

// console.log(usuario)