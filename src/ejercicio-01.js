function downloadFile(fileName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve(`✅ Archivo ${fileName} descargado correctamente`);
            } else {
                reject(`❌ Error al descargar el archivo ${fileName}`);
            }
        }, 2000);
    });
}

async function main() {
    try {
        console.log('Iniciando descarga del archivo...');
        const result = await downloadFile('mi-archivo.txt');
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();