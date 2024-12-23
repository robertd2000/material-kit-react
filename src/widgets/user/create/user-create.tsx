import type { UserFormValues } from 'src/shared/types/user';

import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { UserForm } from '../form';

export function UserCreate() {
  const onSave = (data: UserFormValues) => {
    console.log('onSave', data);
  };

  const onCancel = () => {};

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Создать сотрудника
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={5}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/employees">
            Сотрудники
          </Link>
          <Typography color="text.primary">Профиль</Typography>
        </Breadcrumbs>
      </Box>

      <UserForm onSave={onSave} onCancel={onCancel} buttonText={<>Создать</>} />
    </DashboardContent>
  );
}
