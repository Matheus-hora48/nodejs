const fs = require('fs').promises
const path = require('path')

/*
serve pra retornar os arquivos de uma pagina
fs.readdir('./')
  .then(files => console.log(files))
  .catch(e => console.log(e))
*/

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(_dirname)
  const files = await fs.readdir(rootDir)
  walk(files)
}
function walk(files) {
  for (let file of files) {
    console.log(file)
  }
}
readdir()