<template>
   <div>

      <vagas-favoritas></vagas-favoritas>

      <!--<button @click="desmontarComponente()">Desmontar o componente conteudo</button>
      <topo-padrao @eventoParaPai="acao($event)" /> -->

      <!-- executando a função enviada como callback no componente filho 
      <topo-padrao @eventoParaPai="$event('Texto 1', 125)" />-->

      <!-- <topo-padrao :funcaoCallback="acao"/> -->
      <topo-padrao @navegar="componente = $event"/>
      
      <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
   </div>

</template>

<script>
import Conteudo from "@/components/layouts/Conteudo.vue"
import TopoPadrao from "@/components/layouts/TopoPadrao.vue"
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"

export default {
   name: "App",
   components: {
      Conteudo,
      TopoPadrao,
      VagasFavoritas
   },
   data: ()=>({
      visibilidade: true,
      componente: 'Home'
   }),

   // methods:{
   //    desmontarComponente(){
   //       this.visibilidade = false
   //    },
   //    acao(/*event*/ p1, p2){
   //       //console.log(event.msg)
   //       console.log('função de callback definida no componente pai e chamada no componente filho')
   //       console.log(p1, p2)
   //    }
   // }
}
</script>

<style scoped>

</style>
