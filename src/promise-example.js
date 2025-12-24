const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve('✅ Operación exitosa');
    } else {
      reject('❌ Ocurrió un error');
    }
  }, 1000);
});

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));