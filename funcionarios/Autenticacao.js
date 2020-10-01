class autenticacao {
    static login(autenticavel, senha){
        if(autenticacao.ehautenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        };
        return false;
    };
    static ehautenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    };
};

export default autenticacao;