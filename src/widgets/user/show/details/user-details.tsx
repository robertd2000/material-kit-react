import { useParams } from 'react-router-dom';

import {
  Card,
  Link,
  Button,
  CardMedia,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
} from '@mui/material';
import { _users } from 'src/shared/_mock';
import { declination } from 'src/shared/utils/format-number';
import { Label } from 'src/shared/ui/label';

export function UserDetails() {
  const { id } = useParams();

  const employee = _users[0];

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
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Front end developer
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            Должность: {employee.role}
          </Grid>
          <Grid item xs={12}>
            Статус:{' '}
            <Label color={(employee.status === 'Забанен' && 'error') || 'success'}>
              {employee.status}
            </Label>
          </Grid>
          <Grid item xs={12}>
            Опыт: <Label>{declination(employee.experience)}</Label>
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
            email: <Label>{employee.email}</Label>
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
