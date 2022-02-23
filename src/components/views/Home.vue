<template>
   <div class="container py-4">

      <div class="row">

         <div class="col">

            <pesquisar-vaga></pesquisar-vaga>

         </div>

      </div>

      <!-- <div class="row mt-5" v-for="(vaga,index) in vagas" :key="index">

         <div class="col">
            
            <vaga 
               :titulo-vaga-teste="vaga.titulo"
               :descricao-vaga="vaga.descricao"
               :salario="vaga.salario"
               :modalidade="vaga.modalidade"
               :tipo="vaga.tipo"
               :publicacao="vaga.publicacao"
            /> 

            <vaga v-bind="vaga" />

         </div>   

      </div>-->

      <!-- <lista-vagas v-slot:default="slotProps">
         {{slotProps.vagas}}
         <div v-for="(vaga, index) in slotProps.vagas" :key="index">
            <h4>{{vaga.titulo}}</h4>
            <p>{{vaga.descricao}}</p>
            <hr>
         </div>
      </lista-vagas> -->

      <lista-vagas>
         
         <!-- <template v-slot:titulo="slotProps">

            {{slotProps}}
         </template>

         <template v-slot:default="slotProps">

            {{slotProps}}
         </template>

         <template v-slot:rodape="slotProps">

            {{slotProps}}
         </template> -->

      </lista-vagas>

      <div class="row mt-5">

         <div class="col-4">

            <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>

         </div>

         <div class="col-4">

            <indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador>

         </div>

         <div class="col-4">

            <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador>
            

         </div>

      </div>
      
      
   </div>
</template>

<script>

   import Indicador from '@/components/comuns/Indicador.vue'
   import ListaVagas from '@/components/comuns/ListaVagas.vue'
   import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'



   export default {
      name: 'Home',

      components:{
         Indicador,
         ListaVagas,
         PesquisarVaga
      },

      data: ()=>({
         usuariosOnline: 0,

      }),

      methods:{
         getUsuariosOnline(){
            this.usuariosOnline = Math.floor(Math.random()*101)
         }
      },

      

      created(){
         setInterval(this.getUsuariosOnline, 2000);
      },
      /*-----Hooks
      activated(){
         console.log('Componente é ativado')
      },
      deactivated(){
         console.log('Componente é desativado');
      },
      beforeUnmount(){
         console.log('Antes de desmontar/detruir')
      },
      unmounted(){
         console.log('Desmontado/detruido')
      }*/
   };
</script>

<style scoped>
   
</style>