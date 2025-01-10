import type { Employee, CreateEmployee, UpdateEmployee } from 'src/shared/types/employee';

import base from '../base';

export async function getEmployees(): Promise<Employee[]> {
  const { data } = await base.get('/employees');

  return data;
}

export async function getEmployee(id: number): Promise<Employee> {
  const { data } = await base.get(`/employees/${id}`);

  return data;
}

export async function createEmployee(employee: CreateEmployee) {
  const { data } = await base.post(`/employees`, {
    ...employee,
  });

  return data;
}

export async function updateEmployee(employee: UpdateEmployee): Promise<Employee> {
  const { data } = await base.put(`/employees/${employee.id}`, employee);

  return data;
}

export async function deleteEmployee(id: number): Promise<Employee> {
  const { data } = await base.delete(`/employees/${id}`);

  return data;
}
