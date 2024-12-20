import type { UserFormValues } from 'src/shared/types/user';

import { Box, Typography } from '@mui/material';

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
      <UserForm onSave={onSave} onCancel={onCancel} buttonText={<>Создать</>} />
    </DashboardContent>
  );
}
