const aprovados = ['Agahta','aldo','daniel','raquel']

aprovados.forEach(function(elemento,indice){console.log(elemento,indice)})
console.log();
aprovados.forEach((elemento,indice)=>console.log(elemento,indice));

Array.prototype.forEach2= function (callback){
    for (let i=0; i<=this.length; i++){
        console.log(this[i],i,this)
    }
}