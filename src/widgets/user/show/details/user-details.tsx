import type { Employee } from 'src/shared/types/employee';

import { useParams } from 'react-router-dom';

import {
  Card,
  Link,
  Grid,
  Button,
  CardMedia,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
} from '@mui/material';

import { Label } from 'src/shared/ui/label';
import { StatusEnum } from 'src/shared/types/employee';

interface UserDetailsProps {
  data?: Employee;
}

export function UserDetails({ data }: UserDetailsProps) {
  const { id } = useParams();

  if (!data) return null;

  const employee = data.profile;

  return (
    <Card>
      <CardHeader title="Профиль" />
      <CardMedia
        sx={{ height: 200, width: 200, borderRadius: '50%', display: 'block', mx: 'auto', my: 2 }}
        image="/assets/images/avatar/avatar-1.webp"
        title="green iguana"
        component="img"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.username}
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            Должность: {employee.profession}
          </Grid>
          <Grid item xs={12}>
            Статус:{' '}
            <Label color={(employee.status === StatusEnum.BANNED && 'error') || 'success'}>
              {employee.status}
            </Label>
          </Grid>
          <Grid item xs={12}>
            Грейд: {employee.grade}
          </Grid>
          <Grid item xs={12}>
            Зарплата:{' '}
            <Label>
              {employee.salary.toLocaleString(undefined, { minimumFractionDigits: 2 })} руб.
            </Label>
          </Grid>
          <Grid item>Телефон: {employee.phone}</Grid>
          <Grid item xs={12}>
            email: <Label>{data.email}</Label>
          </Grid>
          <Grid item xs={12}>
            {' '}
            Пол:{' '}
            <Label color={employee.gender === 'мужчина' ? 'error' : 'success'}>
              {employee.gender}
            </Label>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ m: 1 }}>
        <Link href={`/employees/${id}/edit`}>
          <Button variant="contained" color="inherit">
            Редактировать
          </Button>
        </Link>

        <Button variant="contained" color="error">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
