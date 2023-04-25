const app = Vue.createApp({
    data() {
        return {
          valor: 'what?'
        }
      },
      methods:{
        informarSuperior(){
            console.log('informo superior!');
        }
      }
});

app.component('app-titulo',
    {
        data() {
            return {}
        },
        template: `
        <div>
        <h1>{{this.titulo}}!</h1>
        <input type="button" @click="informar($event)" value="emitir!"/>
        </div>
        `,
        props: ['titulo'],
        methods:{
            informar(e){
                console.log('emitio hijo!');
                console.log(e);
                this.$emit('click-boton','click!');
            }
          }
    });

    app.mount('#app');
