import Conta from "./Conta.js"

class ContaSalario extends Conta {
    constructor(cliente){
        super(0, cliente, 1000);
    };

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    };
};

export default ContaSalario;