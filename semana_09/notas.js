const app = Vue.createApp({
    data(){
        return {
            materia: 'Interacción con Dispositivos Móviles',
            buscar: "",
            alumnos: [
                { nombre: 'Franco', nota1: 10, nota2: 9, promedio: 9.5 },
                { nombre: 'Cristina', nota1: 10, nota2: 8, promedio: 2 },
                { nombre: 'Delarah', nota1: 9, nota2: 8, promedio: 8.5 },
                { nombre: 'Maximo', nota1: 9, nota2: 8, promedio: 8.5 },
                { nombre: 'Lucas', nota1: 2, nota2: 2, promedio: 2 },
                { nombre: 'Matias', nota1: 2, nota2: 0, promedio: 2 },
                { nombre: 'Cristian', nota1: 7, nota2: 7, promedio: 7 }

            ],
        }
    }, 
    computed: { // Propiedades que se actualiza automaticamente cuando cambia alguna prop
        cantidades(){
            return this.alumnos.length;
        },
        aprobados(){
            const lista = this.alumnos.filter( alumno => alumno.promedio >= 4);
            return  lista.length;
        },
        desaprobados(){
            const lista = this.alumnos.filter( alumno => alumno.promedio < 4);
            return  lista.length;
        },
        filtrados(){
            const lista = this.alumnos.filter( alumno => alumno.nombre.toLowerCase().includes(this.buscar.toLowerCase()) );
            return lista;
        }
    }
});

app.mount('#app');