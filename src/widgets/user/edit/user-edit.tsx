import type { UserFormValues } from 'src/shared/types/user';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Box, Link, Typography, Breadcrumbs } from '@mui/material';

import { getEmployee } from 'src/shared/api/employee';
import { DashboardContent } from 'src/layouts/dashboard';

import { UserForm } from '../form';

export function UserEdit() {
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => getEmployee(id as unknown as number),
    queryKey: ['getEmployee', id],
  });

  console.log('data', data);

  const onSave = (savedData: UserFormValues) => {
    console.log('onSave', savedData);
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

      <UserForm onSave={onSave} onCancel={onCancel} buttonText={<>Сохранить</>} />
    </DashboardContent>
  );
}
