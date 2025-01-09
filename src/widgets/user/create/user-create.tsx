import type { UserFormValues } from 'src/shared/types/user';

import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { Box, Link, Typography, Breadcrumbs } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { createEmployee } from 'src/shared/api/employee';

import { UserForm } from '../form';

export function UserCreate() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: createEmployee,
    onSuccess() {
      navigate('/employees');
    },
  });

  const onSave = (data: UserFormValues) => {
    mutate({
      ...data,
      interests: [],
      contacts: {},
      status: 'Активен',
    });
  };

  const onCancel = () => {
    navigate('/employees');
  };

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
