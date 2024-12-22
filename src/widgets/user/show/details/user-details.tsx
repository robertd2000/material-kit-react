import { useParams } from 'react-router-dom';

import { Card, Link, Button, CardMedia, Typography, CardContent, CardActions } from '@mui/material';

export function UserDetails() {
  const { id } = useParams();

  return (
    <Card>
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
