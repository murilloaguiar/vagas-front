<template>
   <div :class="estiloAlerta" role="alert">

      <slot name="titulo">
         <!-- caso nenhum conteúdo seja passado pelo componente pai, os valores definidos aqui dentro serão exibidos -->
         <h3>Título da mensagem de feedback</h3>
      </slot>

      <hr>

      <slot>
         <p>mensagem de feedback</p>
      </slot>

   </div>
   
</template>

<script>
export default {
   name: 'Alerta',

   props: {tipo: String},

   computed: {
      estiloAlerta(){
         switch (this.tipo) {
            case 'erro': return 'alert alert-danger'
            case 'sucesso': return 'alert alert-success'
            default: return 'alert alert-success'
              
         }
      }
   }
}
</script>