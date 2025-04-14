import { createContext, useContext, useState, ReactNode } from "react";
import { EmployeeModel } from "@/models/employeeModel";
import data from "@database/database.json";

// 1. Interface do contexto
interface EmployeeContextData {
  employees: EmployeeModel[];
  addEmployee: (employee: EmployeeModel) => void;
  removeEmployee: (id: string) => void;
  updateEmployee: (employee: EmployeeModel) => void;
}

// 2. Criação do contexto
const EmployeeContext = createContext<EmployeeContextData | undefined>(undefined);

// 3. Provider
interface EmployeeProviderProps {
  children: ReactNode;
}

export function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employees, setEmployees] = useState<EmployeeModel[]>(data);

  const addEmployee = (employee: EmployeeModel) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const removeEmployee = (id: string) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEmployee = (employee: EmployeeModel) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === employee.id ? employee : e))
    );
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee, updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}