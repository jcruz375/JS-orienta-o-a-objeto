class cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
};

export default cliente;