<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
         <a class="navbar-brand" href="#">Vagas</a>
         <button
         class="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
         >
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">

         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <!-- <a class="nav-link" href="#" @click="navegarPara()">Home</a> -->

               <!-- <a class="nav-link" href="#" @click="funcaoCallback('Teste 1', 200)">Home</a> -->

               <a class="nav-link" href="#" @click="navegarPara('Home')">Home</a>
            </li>
            <li class="nav-item">
               <!-- <a class="nav-link" href="#" @click="navegarPara()">Publicar vaga</a> -->

               <!-- <a class="nav-link" href="#" @click="funcaoCallback('Teste 2', 300)">Publicar vaga</a> -->

               <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')">Publicar vaga</a>
            </li>
         </ul>

         
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   name: "Topo", //definindo manualmente o nove do componente

   methods:{
      navegarPara(componente){
         this.$emit('navegar', componente)
      }
   }

   /*props:{
      funcaoCallback: Function
   },*/

   /*methods:{
      navegarPara(){
         //console.log('chegamos até aqui')
         //enviando um objeto
         //this.$emit('eventoParaPai', {msg:'dando um oi para o componente pai'})

         //enviando uma função de callback para ser usada no componente pai como $event()
         this.$emit('eventoParaPai',
            (parametro1, parametro2)=>{
               console.log('função de callback emitida pelo componente filho') 
               console.log(parametro1, parametro2)
         })
      }
   }*/
};
</script>

<style>
</style>