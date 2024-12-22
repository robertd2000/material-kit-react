import { Box, Grid, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { UserSkills } from './skills';
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
        <Grid xs={4} spacing={2}>
          <Grid item>
            <UserDetails />
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <UserSkills />
          </Grid>
        </Grid>
        <Grid xs={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid xs={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid xs={8}>{/* <Item>size=8</Item> */}</Grid>
      </Grid>
    </DashboardContent>
  );
}
