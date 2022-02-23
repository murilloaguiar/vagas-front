import { createApp } from 'vue'
import App from './App.vue'

//importando o mitt
import mitt from 'mitt'

//criando a instância da dependência
const emitter = mitt()

//iniciar a instância do vue com base no componente App
const app = createApp(App)
//createApp(App).mount('#app')

//configurando a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associando a instância do vue com o elemento html de id app
app.mount('#app')

