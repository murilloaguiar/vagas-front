<template>

   <!-- <slot name="titulo" :dadosTitulo="{titulo: 'Titulo Lista', nVagas: 15}"></slot> -->

   <slot :vagas="vagas">

      <div class="row mt-5" v-for="(vaga,index) in vagas" :key="index">

         <div class="col">

            <vaga v-bind="vaga" />

         </div>   

      </div>

   </slot>

   <!-- <slot name="rodape" :dadosRodape="{titulo: 'Rodapé Lista', paginacao: {nroPaginas: 10, paginaAtual: 1}}"></slot> -->

</template>

<script>

import Vaga from '@/components/comuns/Vaga.vue'

export default {
   name:'ListaVagas',

   data: ()=>({
      vagas: []
   }),

   components:{
      Vaga
   },

   mounted(){
      this.emitter.on('filtrarVagas', vaga=>{
         const vagas = JSON.parse(localStorage.getItem('vagas'))

         //recuperando os registros de um array com base em alguma condição, criando um novo array filtrado
         this.vagas = vagas.filter(registro => registro.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
      })
   },
   
   activated(){ //não pode ser o mounted porque o componente é montado apenas uma vez, após isso ele fica inativo ou ativo por causa do keep alive

      this.vagas = JSON.parse(localStorage.getItem('vagas'))
      //array de objetos
   },


}
</script>