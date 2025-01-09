import type { ReactNode } from 'react';
import type { UserFormValues } from 'src/shared/types/user';

import { useForm, Controller, FormProvider } from 'react-hook-form';

import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, MenuItem, Select, TextField, InputLabel } from '@mui/material';

interface UserFormProps {
  onSave: (data: UserFormValues) => void;
  onCancel: () => void;
  buttonText: ReactNode;
}

export function UserForm({ onSave, onCancel, buttonText }: UserFormProps) {
  const methods = useForm<UserFormValues>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSave)}>
        <Card>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            padding={4}
            marginTop={1}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="username"
                      label="Логин"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="email"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="email"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="first_name"
                      label="Имя"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.first_name?.type === 'required' && <p role="alert">Имя обязательно</p>}
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="last_name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="last_name"
                      label="Фамилия"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
                {errors.last_name?.type === 'required' && <p role="alert">Фамилия обязательна</p>}
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="phone"
                      label="Номер телефона"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="grade"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="grade"
                      label="Уровень"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="adress"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      multiline
                      name="adress"
                      label="Адрес"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      minRows={5}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6} marginTop={4}>
                <Controller
                  name="profession"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="profession"
                      label="Должность"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6} marginTop={4}>
                <Controller
                  name="salary"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="salary"
                      label="ЗП"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="age"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="age"
                      label="Возраст"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <>
                      {/* <InputLabel id="gender">Пол</InputLabel> */}
                      <TextField
                        select
                        name="gender"
                        fullWidth
                        label="Age"
                        required
                        value={value}
                        onChange={onChange}
                      >
                        <MenuItem value="мужчина">мужчина</MenuItem>
                        <MenuItem value="женщина">женщина</MenuItem>
                      </TextField>
                    </>
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="status"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      required
                      name="status"
                      label="Статус"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="education"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      fullWidth
                      multiline
                      name="education"
                      label="Образование"
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 3 }}
                      value={value}
                      minRows={5}
                      type="text"
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container marginTop={4} spacing={2}>
              <Grid item>
                <LoadingButton size="large" type="submit" variant="contained">
                  {buttonText}
                </LoadingButton>
              </Grid>

              <Grid item>
                <LoadingButton size="large" color="inherit" variant="contained" onClick={onCancel}>
                  Отмена
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </form>
    </FormProvider>
  );
}
