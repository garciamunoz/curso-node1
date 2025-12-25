const usuario = {
  username: 'luchoDev',
  email: 'lucho@dev.com'
};


function mostrarInfo(usuario) {
    const { username, email } = usuario;
    console.log(`Username: ${username}, Email: ${email}`);
}

mostrarInfo(usuario);