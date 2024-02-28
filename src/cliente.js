import Impuesto from './impuestos.js';

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(valorNombre) {
    this._nombre = valorNombre;
  }

  calcularImpuesto() {
    return ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21);
  }
}

export default Cliente;