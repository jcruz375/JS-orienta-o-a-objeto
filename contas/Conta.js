import cliente from "../Client.js";

//classe abstrata
class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("você não deveria instanciar um objeto do tipo conta")
        }

        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }

    //acessores
    set cliente(novoValor) {
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this.saldo
    }

    //métodos
    sacar(valor) {
        throw new Error('O metodo sacar é abstrado');
    };

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log(`saque de ${valor} reais, mais taxas. efetuado com sucesso, novo saldo ${this._saldo}`)
            return valor;
        }
        return 0;

    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`depósito de ${valor} reais efetuado com sucesso, novo saldo ${this._saldo}`)

        } else {
            console.log(`impossível completar esta ação o valor que informou é menor que zero`)
        }
    };

    transferir(valor, conta) {
        const valorTransferir = this.sacar(valor);
        conta.depositar(valorTransferir);
    }
}

export default Conta;