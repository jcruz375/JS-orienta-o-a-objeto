import cliente from "./Client.js";

class ContaCorrente {
    //atributos
    static numeroDeContas = 0
    _cliente;
    _saldo = 0;
    agencia;
    
    //acessores
    set cliente(novoValor){
        if (novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this.saldo
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas +=1
    }

    //métodos
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(`saque de ${valor} reais efetuado com sucesso, novo saldo ${this._saldo}`)
            return valor;
        };
    };
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`depósito de ${valor} reais efetuado com sucesso, novo saldo ${this._saldo}`)
            
        }else {
            console.log(`impossível completar esta ação o valor que informou é menor que zero`)
        }
    };
    transferir(valor, conta){
        const valorTransferir = this.sacar(valor);
        conta.depositar(valorTransferir);
    }
}

export default ContaCorrente;