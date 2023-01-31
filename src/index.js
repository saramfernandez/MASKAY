let option = ''
let candidatos = []
let puestos = []
let listaPuestos = ''

class candidato {
    constructor(nombre, puesto) {
      this.nombre = nombre;
      this.puesto = puesto;
    }
}

solicitarOpcion()

while(option !== '4'){
    switch(option){
        case '1':
            if(puestos.length === 0){
                alert('No hay puestos disponibles')
            }else{
                let nombre = prompt('Ingrese el nombre del candidato:')
                let puesto = parseInt(prompt(`Ingresar el puesto: \n ${puestos[0]== undefined ? '': '1: '+puestos[0]} \n ${puestos[1]== undefined ? '': '2: '+ puestos[1]} \n ${puestos[2]== undefined ? '': '3: '+puestos[3]}`)) 
                candidatos.push(new candidato(nombre,puestos[puesto]))
            }
            break
        case '2':
            if(puestos.length <= 3){
                puestos.push(prompt(`Ingresar nombre del puesto:`))  
            }else{
                alert('Se alcanzó el máximo de puestos ')
            }
            break
        case '3':
            for (const candidato  of candidatos) {
                console.log(candidato)
            }
        default:
            break
    }
    solicitarOpcion()
}


function solicitarOpcion(){
    option = prompt('Ingresá el número de opción deseada:\n1- Ingresar Candidato \n2- Ingresar Puesto \n3- Ver lista de candidatos por consola \n4- Salir')
}

