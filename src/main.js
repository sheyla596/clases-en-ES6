import Cliente from './cliente.js';
import Impuesto from './impuestos.js';

const impuesto = new Impuesto(100000, 10000);
const cliente = new Cliente('Humberto', impuesto);

console.log("MOSTRANDO LOS DATOS DEL OBJETO CLIENTE");
console.log("");
console.log(`El impuesto calculado para el cliente ${cliente.nombre} 
es ${cliente.calcularImpuesto()}`);