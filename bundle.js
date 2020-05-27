"use strict";

var usuario = {
  nome: 'greg',
  idade: 25,
  jogos: {
    volei: 'volei de areia',
    agua: 'natação'
  }
};
var idade = usuario.idade,
    volei = usuario.jogos.volei,
    nome = usuario.nome;
console.log(volei, idade);
