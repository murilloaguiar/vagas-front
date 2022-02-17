<template>
   <div class="container py-4">
      <div class="row">

         <div class="col">

            <pesquisar-vaga></pesquisar-vaga>

         </div>

      </div>

      <div class="row mt-5">

         <div class="col-4">

            <indicador titulo="Vagas abertas" indicador="100"></indicador>

         </div>

         <div class="col-4">

            <indicador titulo="Profissionais cadastrados" indicador="225"></indicador>

         </div>

         <div class="col-4">

            <indicador titulo="Visitantes online" indicador="25"></indicador>

         </div>

      </div>
      
      
   </div>
</template>

<script>

   import Indicador from '@/components/comuns/Indicador.vue'
   import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'

   export default {
      name: 'Home',
      components:{
         PesquisarVaga,
         Indicador
      },

      //-----Hooks
      created(){
         console.log('Criado',this.teste)
      },
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
      }
   };
</script>

<style scoped>
   
</style>