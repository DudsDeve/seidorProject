import { EmployeeModel } from "@/models/employeeModel";
import data from "@database/database.json";

interface SalarioBaseIRResult {
  id: string;
  nome: string;
  salarioBruto: number;
  dependentes: number;
  salarioBaseIR: number;
}

export function calcularSalarioBaseIR(
  descontoPrevidencia: number
): SalarioBaseIRResult[] {
  const deducaoPorDependente = 189.59;
  const employees: EmployeeModel[] = data;

  const employeeSalarioBase = employees.map((employee) => {
    const salarioBaseIR =
      employee.salario -
      descontoPrevidencia -
      employee.dependentes * deducaoPorDependente;

    return {
      id: employee.id,
      nome: employee.nome,
      salarioBruto: employee.salario,
      dependentes: employee.dependentes,
      salarioBaseIR: parseFloat(salarioBaseIR.toFixed(2)),
    };
  });

  return employeeSalarioBase;
}
