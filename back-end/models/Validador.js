const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   cpf: {
      type: String,
      required: true,
      index: { unique: true } // Não pode repetir CNPJ
   },
   Cedula_identidade: {
      type: String,
      validate: {
         validator: val => {
            // Cedula de identidade precisa ser 'ISENTO' ou um número inteiro
            return val.toUpperCase() == 'ISENTO' || !isNaN(Number(val))
         },
         message: 'Cédula Identidde precisa ser "ISENTO" ou um número inteiro'
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
module.exports = mongoose.model('Validador', esquema, 'validador')