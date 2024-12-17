import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, TextField, Typography } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

export function UserEdit() {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Редактировать сотрудника
        </Typography>
      </Box>

      <Card>
        <Box display="flex" flexDirection="column" alignItems="flex-end" padding={4} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="firts_name"
                label="Имя"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="last_name"
                label="Фамилия"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />{' '}
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="email"
                label="Email"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="phone"
                label="Номер телефона"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Адрес"
                name="Adress"
                id="Adress"
                aria-describedby="my-helper-text"
                minRows={5}
                placeholder="Адрес"
              />
            </Grid>

            <Grid item xs={6} marginTop={4}>
              <TextField
                fullWidth
                required
                name="role"
                label="Должность"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6} marginTop={4}>
              <TextField
                fullWidth
                required
                name="salary"
                label="ЗП"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />{' '}
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="gender"
                label="Пол"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="Status"
                label="Статус"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Образование"
                name="Education"
                id="Education"
                aria-describedby="my-helper-text"
                minRows={5}
                placeholder="Образование"
              />
            </Grid>
          </Grid>

          <Grid container marginTop={4} spacing={2}>
            <Grid item>
              <LoadingButton size="large" type="submit" variant="contained">
                Сохранить
              </LoadingButton>
            </Grid>

            <Grid item>
              <LoadingButton size="large" color="inherit" variant="contained">
                Отмена
              </LoadingButton>{' '}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </DashboardContent>
  );
}
