import type { UserFormValues } from 'src/shared/types/user';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import { Box, Link, Typography, Breadcrumbs } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { getEmployee, updateEmployee } from 'src/shared/api/employee';

import { UserForm } from '../form';

export function UserEdit() {
  const { id } = useParams();
  const methods = useForm<UserFormValues>();

  const { reset } = methods;

  useQuery({
    queryFn: async () => {
      const employeeData = await getEmployee(Number(id));

      reset({ ...employeeData, ...employeeData.profile });

      return employeeData;
    },
    queryKey: ['getEmployee', id],
  });

  const { mutate } = useMutation({
    mutationKey: ['updateEmployee'],
    mutationFn: updateEmployee,
  });

  const onSave = (savedData: UserFormValues) => {
    mutate({ ...savedData, id: Number(id), status: 'Активен', contacts: {}, interests: [] });
  };

  const onCancel = () => {};

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Редактировать сотрудника
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={5}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/employees">
            Сотрудники
          </Link>

          <Link underline="hover" color="inherit" href={`/employees/${id}`}>
            Профиль
          </Link>

          <Typography color="text.primary">Редактировать</Typography>
        </Breadcrumbs>
      </Box>

      <UserForm onSave={onSave} onCancel={onCancel} methods={methods} buttonText={<>Сохранить</>} />
    </DashboardContent>
  );
}
