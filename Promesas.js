function horaActual()
{
    let date = new Date()
    var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();
return `${hour}:${minutes}:${seconds}:`;

}

function getEnsalada()
{
	console.log(horaActual() + ':Ensalada terminada!');	  
	return 'ensalada!';
}
function getHamburguesa()
{
	setTimeout( () => 
  {
		console.log(horaActual() + ':Hamburguesa terminada!');	  
  }, 6000);
	
  return 'Hamburguesa JyQ!';
}
function getHamburguesaP()
{
	  return new Promise( (resolve, reject) => {
    	setTimeout( () => 
  		{
  			resolve('Hamburguesa JyQ');
			}, 5000)
    });
}



function getBebida()
{
	setTimeout( () => 
  {
  console.log(horaActual() + ':Bebida terminada!');	  
		
  }, 3000);
	
  return 'Coca cola!';
}

function getBebidaP()
{
	  return new Promise( (resolve, reject) => {
    	setTimeout( () => 
  		{
  			resolve('Cocacola');
			}, 3000)
    });
}

async function preparaP()
{
	getEnsalada();
  const bebida = getBebidaP().then(resultado => {
  	console.log(horaActual() + ':Bebida terminada!' + resultado);	  
  }
  );
  const hamburguesa =  getHamburguesaP().then(resultado => {
  	console.log(horaActual() + ':Hamburguesa terminada!' + resultado);	  
  }
  );
  
  await Promise.all([bebida, hamburguesa]);
}

function preparar()
{
	getEnsalada();
  getHamburguesa();
  getBebida();
}
preparaP()
//preparar();