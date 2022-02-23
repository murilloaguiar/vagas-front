<template>
   <div class="card">

      <div class="card-header bg-dark text-white">

         <div class="row">

            <div class="col d-flex justify-content-between">

               <div>
                  {{titulo}}
               </div>

               <div>
                  
                  <div class="form-check form-switch">
                     <input type="checkbox" class="form-check-input" v-model="favoritada">
                     <label for="" class="form-check">Favoritar</label>
                     <!-- <button class="btn btn-danger" @click="dispararEventoComMitt">Teste</button> -->
                  </div>

               </div>

            </div>
   
         </div>
         
      </div>

      <div class="card-body">
         <p>{{descricao}}</p>
      </div>

      <div class="card-footer">
         <small class="text-muted">Salário: R$ {{salario}} | Modalidade: {{getModalidade}} | Tipo: {{getTipo}} | Publicação: {{getPublicacao}}</small>
      </div>
   </div>   

</template>

<script>
   export default {
      name: 'Vaga',

      data:()=>({
         favoritada: false
      }),

      watch: {
         favoritada(valorNovo){
            if (valorNovo) {
               this.emitter.emit('favoritarVaga', this.titulo)
            } else {
               this.emitter.emit('desfavoritarVaga', this.titulo)
            }
         }
      },

      //props:['tituloVagaTeste','descricaoVaga','salario','modalidade','tipo','publicacao'],

      //tipando as props
      props: {
         titulo: {
            type: String,
            required: true,
            validator(p){
               //console.log('Prop: ', p, p.length)
               if(p.length < 6) return false
               return true
            }
         },
         descricao: {
            type: String,
            //default: 'O contratante não informou uma descrição para essa vaga'
            default(){
               return '*'.repeat(20)
            }
         },
         salario: {
            type: [Number, String],
            required: true
         },
         modalidade: {
            type: String,
            required: true
         },
         tipo: {
            type: String,
            required: true
         },
         publicacao: {
            type: String,
            required: true
         },
      },

      computed:{
         getModalidade(){
            switch (this.modalidade) {
               case "1": return "Home Office"
               case "2": return "Presencial"

            }
            return ''
         },

         getTipo(){

            switch (this.tipo) {
               case "1": return "CLT"
               case "2": return "PJ"

            }
            return ''
         },

         getPublicacao(){
            let dataPublicacao = new Date(this.publicacao)
            return dataPublicacao.toLocaleDateString('pt-BR')
         }
      },

      methods:{
         /*dispararEventoComMitt(){
            this.emitter.emit('eventoGlobal1','Teste Caputura Evento Parâmetro')
         }*/
      }

      /*created(){
         console.log('tituloVagaTeste '+typeof this.tituloVagaTeste)
         console.log('descricaoVaga '+typeof this.descricaoVaga)
         console.log('salario '+typeof this.salario)
         console.log('modalidade '+typeof this.modalidade)
         console.log('tipo '+typeof this.tipo)
         console.log('publicacao '+typeof this.publicacao)
      }*/

   }
</script>