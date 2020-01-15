class Lancamento {
    constructor(nome='Generico',valor=0){
        this.nome=nome;
        this.valor=valor;
    }
}
class cicloFinanceiro{
    constructor(mes,ano){
        this.mes=mes;
        this.ano=ano;
        this.lancamento= []
    }
    addLancamentos(...lancamento){
        lancamento.forEach(l=> this.lancamento.push(l))
    }
    sumario(){
        let total=0;
        this.lancamento.forEach( l => total+=l.valor)
        return total;
    }
}

const salario = new Lancamento('Salario',45000);
const contaLuz =  new Lancamento('Luz',-2000);

const lanca = new cicloFinanceiro('08','31');
lanca.addLancamentos(salario,contaLuz);
console.log(lanca.sumario());

class Avo{
    constructor(sobrenome){
        this.sobrenome=sobrenome;
    }
}
class Pai extends Avo{
    constructor(sobrenome,profissao){
        super(sobrenome);
        this.profissao=profissao;        
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva');
    }
}
console.log(new Filho);
