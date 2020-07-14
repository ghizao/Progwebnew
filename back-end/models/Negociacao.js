const mongoose = require('mongoose')

// ---> É necessário instalar: yarn add mongoose-sequence
// mongoose está sendo passado como parâmetro para mongoose-sequence
const mongooseSeq = require('mongoose-sequence')(mongoose);

const esquema = mongoose.Schema({
   data_negociacao: {
      type: Date,
      required: true
   },
   forma_pagamento: {
      type: String,
      required: true,
      enum: ['DI', 'CH', 'CC', 'CD']
      // DI = dinheiro
      // CH = cheque
      // CC = cartão de crédito
      // CD = cartão de débito
   },
   data_pagamento: {
      type: Date
   },
   num_negociacao: {
      type: Number,
      index: { unique: true }
   },

   valor_negociado: {
      type: String,
      required: true,
   },
   
   contratante: {
      type: mongoose.ObjectId,
      ref: 'Contratante', // Nome do model referenciado
      required: true
   },

   profissional: {
      type: mongoose.ObjectId,
      ref: 'Profissional', // Nome do model referenciado
      required: true
   },

   demanda: {
      type: mongoose.ObjectId,
      ref: 'Demanda', // Nome do model referenciado
      required: true
   },
})

// inc_field: o campo a ser autoincrementado
// start_seq: o número que irá iniciar a contagem. Default: 1
esquema.plugin(mongooseSeq, {inc_field: 'num_negociacao', start_seq: 1});

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do modelo serão armazenados no
      MongoDB
*/
module.exports = mongoose.model('Negociacao', esquema, 'negociacao')