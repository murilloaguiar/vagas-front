<template>
   <div class="h-100 p-5 bg-light border rounded-3">
      <h2>Pesquisar vagas</h2>

      <div class="row">

         <div class="col">

            <div class="form-group">
               <label for="inputPesquisa">Titulo da vaga</label>
               <input type="text" id="inputPesquisa" class="form-control" placeholder="Pesquise por palavras chaves">
               <small class="text-muted form-text">Informe palavras que estejam relacionadas com o título da vaga</small>
            </div>
            
         </div>

      </div>
      

      <div class="row">

         <div class="col">

            <button class="btn btn-outline-dark mt-2">Buscar</button>

         </div>

      </div>

   </div>   
</template>

<script>
export default {
   name: 'PesquisarVaga'
}
</script>