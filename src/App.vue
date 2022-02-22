<template>
   <div>
      <h1>Componente App</h1>
      <button @click="desmontarComponente()">Desmontar o componente conteudo</button>
      <!-- <topo-padrao @eventoParaPai="acao($event)" /> -->

      <!-- executando a função enviada como callback no componente filho 
      <topo-padrao @eventoParaPai="$event('Texto 1', 125)" />-->

      <topo-padrao :funcaoCallback="acao"/>
      
      <conteudo v-if="visibilidade"></conteudo>
   </div>

</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";

export default {
   name: "App",
   components: {
      Conteudo,
      TopoPadrao,
   },
   data: ()=>({
      visibilidade: true
   }),
   methods:{
      desmontarComponente(){
         this.visibilidade = false
      },
      acao(/*event*/ p1, p2){
         //console.log(event.msg)
         console.log('função de callback definida no componente pai e chamada no componente filho')
         console.log(p1, p2)
      }
   }
}
</script>

<style scoped>

</style>
