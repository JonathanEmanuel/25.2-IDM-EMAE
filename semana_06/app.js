const app = Vue.createApp({
    data(){
        return {
            saldo: 5000,
            visible: true,
            transacciones: [
                { fecha: '08-09-25', valor: 30000 },
                { fecha: '08-09-25', valor: -10000 },
                { fecha: '07-09-25', valor: -40000 },

            ]
        }
    }
});

app.mount('#app')