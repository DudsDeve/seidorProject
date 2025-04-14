interface DescontoIRRFResult {
  id: string;
  nome: string;
  salarioBaseIR: number;
  aliquota: number;
  parcelaADeduzir: number;
  descontoIRRF: number;
}

export function DescontoIRRF(
  salarioBaseList: { id: string; nome: string; salarioBaseIR: number }[]
): DescontoIRRFResult[] {
  return salarioBaseList.map((item) => {
    const { salarioBaseIR } = item;

    let aliquota = 0;
    let parcelaADeduzir = 0;

    if (salarioBaseIR <= 2259.20) {
      aliquota = 0;
      parcelaADeduzir = 0;
    } else if (salarioBaseIR <= 2826.65) {
      aliquota = 0.075;
      parcelaADeduzir = 169.44;
    } else if (salarioBaseIR <= 3751.05) {
      aliquota = 0.15;
      parcelaADeduzir = 381.44;
    } else if (salarioBaseIR <= 4664.68) {
      aliquota = 0.225;
      parcelaADeduzir = 662.77;
    } else {
      aliquota = 0.275;
      parcelaADeduzir = 896.0;
    }

    const descontoIRRF = Math.max(0, salarioBaseIR * aliquota - parcelaADeduzir);

    return {
      id: item.id,
      nome: item.nome,
      salarioBaseIR: parseFloat(salarioBaseIR.toFixed(2)),
      aliquota,
      parcelaADeduzir,
      descontoIRRF: parseFloat(descontoIRRF.toFixed(2)),
    };
  });
}
