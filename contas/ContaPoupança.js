import cliente from "../Client.js";
import Conta from "./Conta.js";

class ContaPoupança extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        
    }

}

export default ContaPoupança;