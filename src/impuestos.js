class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
      this.monto_bruto_anual = montoBrutoAnual;
      this._deducciones = deducciones;
    }
  
    get montoBrutoAnual() {
      return this.monto_bruto_anual;
    }
  
    set montoBrutoAnual(valorMonto) {
      this.monto_bruto_anual = valorMonto;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(valorDeducc) {
      this._deducciones = valorDeducc;
    }
  }
  
export default Impuesto;
  