const usuario = {
    nome: 'greg',
    idade: 25,
    jogos: {
        volei: 'volei de areia',
        agua: 'natação',
    },
}
const { idade, jogos: { volei }, nome } = usuario

console.log(volei, idade)