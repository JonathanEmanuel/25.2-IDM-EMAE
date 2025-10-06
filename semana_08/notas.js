const app = Vue.createApp({
    data(){
        return {
            materia: 'Interacción con Dispositivos Móviles',
            alumnos: [
                { nombre: 'Franco', nota1: 10, nota2: 9, promedio: 9.5 },
                { nombre: 'Cristina', nota1: 10, nota2: 8, promedio: 2 },
                { nombre: 'Delarah', nota1: 9, nota2: 8, promedio: 8.5 },
                { nombre: 'Maximo', nota1: 9, nota2: 8, promedio: 8.5 }


            ]
        }
    }
});

app.mount('#app');