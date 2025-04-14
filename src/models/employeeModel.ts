export interface EmployeeModel {
  id: string
  nome: string
  cpf: string
  salario: number
  descontoPrevidencia?: number
  dependentes: number
  descontoIRPF?: number
  atualizadoEm: string
  criadoEm: string
}