const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   especialidade: {
      type: String,
      required: true
   },
   cpf: {
      type: String,
      required: true,
      index: { unique: true } // Não pode repetir cpf
   },
   cedula_identidade: {
      type: String,
      validate: {
         validator: val => {
            // Inscrição Estadual precisa ser 'ISENTO' ou um número inteiro
            return val.toUpperCase() == 'ISENTO' || !isNaN(Number(val))
         },
         message: 'CI ou Inscrição Estadual precisa ser "ISENTO" ou um número inteiro'
      },
      required: true
   },  
   endereco: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   email: {
      type: String,
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
module.exports = mongoose.model('Profissional', esquema, 'profissional')