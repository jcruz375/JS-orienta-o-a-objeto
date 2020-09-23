import cliente from './Client.js';
import ContaCorrente from './ContaCorrente.js';

const cliente1 = new cliente("joão", 38860498848);
const CCJoao = new ContaCorrente(cliente1, 6733);
CCJoao.depositar(100);

const cliente2 = new cliente("matue", 77766633309);
const CCMatue = new ContaCorrente(cliente2, 1234);

CCJoao.transferir(20, CCMatue )

console.log(ContaCorrente.numeroDeContas);