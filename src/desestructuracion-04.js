const empleado = {
  nombre: 'Lucho',
  cargo: {
    titulo: 'Senior Backend Dev',
    departamento: 'TI'
  }
};


function showData(employee) {
 const { titulo, departamento}    = employee.cargo;
 console.log("🚀 ~ showData ~ departamento:", departamento)
 console.log("🚀 ~ showData ~ titulo:", titulo)

}

showData(empleado);