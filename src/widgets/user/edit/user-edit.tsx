import type { UserFormValues } from 'src/shared/types/user';

import { useParams } from 'react-router-dom';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { UserForm } from '../form';

export function UserEdit() {
  const { id } = useParams();

  const onSave = (data: UserFormValues) => {
    console.log('onSave', data);
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
