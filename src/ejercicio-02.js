function tienda(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const disponible = true; 
            if (disponible) {
                resolve(`✅ El producto ${producto} está disponible para la compra`);
            }else {
                reject(`❌ El producto ${producto} no está disponible`);
            }   
        }, 2000);
    });   
}

async function comprarProducto() {
    try {
        console.log('Buscando el producto en la tienda...');
        const mensaje = await tienda('Laptop');
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}

comprarProducto();