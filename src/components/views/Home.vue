<template>
  <div>
      <h1>Componente Home</h1>
      
  </div>
</template>

<script>
   export default {
      name: 'Home',
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