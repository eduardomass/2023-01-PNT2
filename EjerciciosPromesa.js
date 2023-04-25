async function IniciarCarrera()
{
    console.log('Inicio de carrera.');
    const corredor1 = Correr('Eduardo');
    const corredor2 = Correr('Sofia');
    const corredor3 = Correr('Valentina');
    const resultado = await Promise.all([corredor1, corredor2, corredor3]);

    resultado.sort((a, b) => a.tiempo - b.tiempo);
    resultado.forEach((corredor, indice) => {
        console.log(`El corredor ${corredor.nombre} llego en el puesto ${indice + 1} con tiempo ${corredor.tiempo}`);
    });

}

async function IniciarCarreraMuchos()
{
    let lista = [];
    console.log('Inicio de carrera.');
    for (let index = 0; index < 50; index++) {
        const corredor = Correr(index);
        lista.push(corredor);
    }
    
    const resultado = await Promise.all(lista);

    resultado.sort((a, b) => a.tiempo - b.tiempo);
    resultado.forEach((corredor, indice) => {
        console.log(`El corredor ${corredor.nombre} llego en el puesto ${indice + 1} con tiempo ${corredor.tiempo}`);
    });

}


async function Correr(nombre){
    const tiempo = getRandomInt(10, 3);
    const corredor = {nombre, tiempo};   
    
    
    return new Promise((resolve) => {
        setTimeout(() => resolve(corredor), tiempo);
    });
}


function getRandomInt(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  IniciarCarreraMuchos();
  //IniciarCarrera();