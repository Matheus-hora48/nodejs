const fs = require('fs').promises;
const caminhoArquivo = path.resolve(__dirname,'teste.json')

module.exports = (caminho, dados) =>{
  fs.writeFile(caminho, dados, { flag: 'w' , })
}


