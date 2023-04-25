Vue.component('app-titulo',
    {
        data() {
            return {}
        },
        template: `<h1>{{this.titulo}}!</h1>`,
        props: ['titulo']
    });

const app = new Vue({
    el: '#app',
    data : {
        valor: ''
    },
    methods: {
    },
    created: function () {
        console.log('creado!');
    }

});