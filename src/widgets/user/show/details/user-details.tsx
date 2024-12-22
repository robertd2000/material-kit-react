import { red } from '@mui/material/colors';
import {
  Card,
  Avatar,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Link,
  Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';

export function UserDetails() {
  const { id } = useParams();

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/assets/images/avatar/avatar-1.webp"
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={`/employees/${id}/edit`}>
          <Button variant="contained" color="inherit">
            Редактировать
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
