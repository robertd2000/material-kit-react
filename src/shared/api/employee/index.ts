import type { Employee } from 'src/shared/types/employee';

import base from '../base';

export async function getEmployees(): Promise<Employee[]> {
  const { data } = await base.get('/employees');

  return data;
}
