const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   descricao: {
      type: String,
      required: true
   },
   preco_estimado: {
      type: Number,
      required: true,
      min: 0
   },
   prazo_entrega_desejado: {
      type: Date
   },
   
   especialidade: {    //informar se é Alvenaria, Elétrico, Hidráulico ou Mecânico
      type: String,
      required: true,
      enum: ['alvenaria', 'eletrica', 'hidraulica', 'mecanica']
   },
   profissional: {
      type: mongoose.ObjectId,
      ref: 'Profissional', // Nome do model referenciado
      required: false
   }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no
      MongoDB
*/
module.exports = mongoose.model('Demanda', esquema, 'demanda')