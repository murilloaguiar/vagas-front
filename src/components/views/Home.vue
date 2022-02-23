<template>
   <div class="container py-4">

      <div class="row">

         <div class="col">

            <pesquisar-vaga></pesquisar-vaga>

         </div>

      </div>

      <div class="row mt-5" v-for="(vaga,index) in vagas" :key="index">

         <div class="col">
            
            <!-- <vaga 
               :titulo-vaga-teste="vaga.titulo"
               :descricao-vaga="vaga.descricao"
               :salario="vaga.salario"
               :modalidade="vaga.modalidade"
               :tipo="vaga.tipo"
               :publicacao="vaga.publicacao"
            /> -->

            <vaga v-bind="vaga" />

         </div>

      </div>

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
   import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
   import Vaga from '@/components/comuns/Vaga.vue'


   export default {
      name: 'Home',

      components:{
         PesquisarVaga,
         Indicador,
         Vaga
      },

      data: ()=>({
         usuariosOnline: 0,
         vagas: []
      }),

      methods:{
         getUsuariosOnline(){
            this.usuariosOnline = Math.floor(Math.random()*101)
         }
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