const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
  titulo: {type: String, required: true}, 
  descricao: String
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

const HomeModels = mongoose.model('Home', HomeSchema)


