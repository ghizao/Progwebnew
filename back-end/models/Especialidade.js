const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   descricao: {
      type: String,
      required: true,      
   },
   experiencia: {
      type: String,
      required: true,
      default: 'sem experiência' // Se nenhum valor for especificado, assume 0
   },
   profissional: {
      type: mongoose.ObjectId,
      ref: 'Profissional',
      required: true
   }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no
      MongoDB
*/
module.exports = mongoose.model('Especialidade', esquema, 'especialidade')