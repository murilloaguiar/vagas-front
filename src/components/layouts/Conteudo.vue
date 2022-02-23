<template>
  <div>
      
      <!-- <button @click="atualizarComponente()">Atualizar</button>
      <button @click="conteudo = 'home'">Home</button>
      <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
      renderizar de modo dinâmico os componentes home e publicar-vaga e colocando eles em cache, preservando suas instâncias -->


      <keep-alive>
         <component :is="conteudo"/>
      </keep-alive>
      

      <!-- <home></home>
      <publicar-vaga></publicar-vaga> -->

  </div>
</template>

<script>
   import Home from '@/components/views/Home.vue'
   import PublicarVaga from '@/components/views/PublicarVaga.vue'
   export default {
      name: 'Conteudo',

      props:{
         conteudo: {
            type: String,
            required: true
         }
      },

      components:{
         Home,
         PublicarVaga
      },

      /*data: ()=>({
         teste: 'O componente foi criado',
         titulo: 'Componente Conteudo'
      }),

      methods: {
         atualizarComponente(){
            this.titulo+='*'
         }
      },*/
      /*
      beforeCreate(){
         console.log('Antes de criar', this.teste)
         //sem sucesso ao acessar teste, pois a propriedades reativas ainda não foram criadas
      },
      created(){
         console.log('Criado',this.teste)
      },
      beforeMount(){
         console.log('Antes de montar o template')
      },
      mounted(){
         console.log('Montado')
      },
      beforeUpdate(){
         console.log('Antes de atualizar')
      },
      updated(){
         console.log('Atualizado')
      },
      beforeUnmount(){
         console.log('Antes de desmontar/detruir')
      },
      unmounted(){
         console.log('Desmontado/detruido')
      },
      errorCaptured(){
         console.log('Erro capturado')
      },
      renderTracked(){
         console.log('Re-renderizaçõa rastreada')
      },
      renderTriggered(){
         console.log('Re-renderizaçõa acionada')
      },
      activated(){
         console.log('Componente é ativado')
      },
      deactivated(){
         console.log('Componente é desativado');
      }*/
   };
</script>

<style module>
   .teste-1{
      background-color: red;
   }

   #teste-2{
      background-color: yellow;
   }
</style>