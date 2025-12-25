const persona = {
  nombre: 'Alberto',
  edad: 35,
  ciudad: 'Lima',
  profesion: 'Desarrollador'
};

/**
 * Usa desestructuración para extraer 
 * las propiedades nombre y profesion en dos 
 * variables nuevas. Imprímelas en consola.
*/

const {nombre, profesion } = persona;
console.log("🚀 ~ profesion:", profesion)
console.log("🚀 ~ nombre:", nombre)
