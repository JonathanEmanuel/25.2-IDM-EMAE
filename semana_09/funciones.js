const personas = ['Juan Ruiz', 'Juan Ramirez', 'Micaela Ramirez', 'Julieta Gomez', 'Juan Ruiz'];

// Funciones de orden superior -> Son funciones que reciben funciones por parametros
const convertir = (texto) => texto.toUpperCase(); 
//console.log( convertir('pepe')  );
const mostrarDato = ( dato, fn) => {
    const texto = " [ " + fn(dato) + " ]";
    console.log(texto)
}

//mostrarDato('sofia', convertir);
// Normalizar los texto
//const busqueda = ( persona) =>  persona.toLowerCase() === 'juan ruiz'; 
const pos = personas.filter( ( persona) =>  persona.toLowerCase().includes('ju') );


console.log( pos)