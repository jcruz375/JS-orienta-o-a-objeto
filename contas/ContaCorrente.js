import cliente from "../Client.js";
import Conta from "./Conta.js";

class ContaCorrente extends Conta {
    //atributos
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas +=1
    }

    sacar(valor){
        let taxa = 1.1
        this._sacar(valor, taxa);
    };
}

export default ContaCorrente;