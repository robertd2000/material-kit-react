import Grid from '@mui/material/Grid2';
import { Box, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { UserDetails } from './details';

export function UserShow() {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Профиль сотрудника
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={4}>
          <UserDetails />
        </Grid>
        <Grid size={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid size={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid size={8}>{/* <Item>size=8</Item> */}</Grid>
      </Grid>
    </DashboardContent>
  );
}
