import Cliente from './Client.js';
import autenticacao from './funcionarios/Autenticacao.js';
import Diretor from './funcionarios/Diretor.js';
import Gerente from './funcionarios/Gerente.js';

const diretor = new Diretor("João", 10000, 38860498848);
diretor.cadSenha(12345)

const gerente = new Gerente("carlos", 10000, 12345678900);
gerente.cadSenha(12345)

const cliente = new Cliente("josé", 98745632100)

const logIn = autenticacao.login(cliente, 12345);

console.log(logIn);