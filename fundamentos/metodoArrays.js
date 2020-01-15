const pilotos = ['Vettel','Alonso','Raikene','Massa']
pilotos.pop(); // remove o ultimo elemento dos array
console.log(pilotos)

pilotos.push('Verstappen')
pilotos.shift()//primeiro elemento da lista
pilotos.unshift('hamilton'); // coloca na primeiro indice
console.log(pilotos)

const algunsPilotos= pilotos.slice(2);
console.log(algunsPilotos);

