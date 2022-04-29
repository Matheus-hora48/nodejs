const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json')

const pessoa = [
  {nome: 'Matheus'},
  {nome: 'Luis'},
  {nome: 'Gustavo'},
  {nome: 'Fernando'},
]

const json = JSON.stringify(pessoa, '', 2)

fs.writeFile(caminhoArquivo, json, { flag: 'w' , })