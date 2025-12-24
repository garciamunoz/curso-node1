function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejecutar() {
  console.log('Inicio');
  await esperar(1000);
  console.log('Fin después de 1 segundo');
}

ejecutar();
