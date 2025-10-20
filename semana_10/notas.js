let aprobados = 0;
let desaprobados = 0;

const app = Vue.createApp({
    data(){
        return {
            materia: 'Interacción con Dispositivos Móviles',
            buscar: "",
            alumnos: [
                { nombre: 'Franco', nota1: 10, nota2: 9, promedio: 9.5 },
                { nombre: 'Lucas Gomez', nota1: 10, nota2: 9, promedio: 9.5 },
                { nombre: 'Maria Lopez', nota1: 10, nota2: 9, promedio: 9.5 },
                { nombre: 'Emanuel', nota1: 10, nota2: 9, promedio: 9.5 },
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
            aprobados = lista.length;
            return  lista.length;
            
        },
        desaprobados(){
            const lista = this.alumnos.filter( alumno => alumno.promedio < 4);
            desaprobados = lista.length;
            return  lista.length;
        },
        filtrados(){
            return this.alumnos.filter( alumno => alumno.nombre.toLowerCase().includes(this.buscar.toLowerCase()) );
        }
    },
    methods: {
        ordernarNombre(){
            console.log('ordenado...');
            this.alumnos.sort(  (a, b) => {
                return a.nombre.localeCompare( b.nombre )
            })
        },
        ordenarPromedio(){
            this.alumnos.sort( (a, b) => {
                if( a.promedio > b.promedio){
                    return 1
                }else {
                    return -1
                }
            } )
        }
    }
});

app.mount('#app');


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Aprobados', 'Desaprobados'],
      datasets: [{
        label: '# Notas',
        data: [aprobados, desaprobados],
        backgroundColor: ['#008080', '#ff6347'],
        borderWidth: 1
      }]
    },
    options: {
    responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });