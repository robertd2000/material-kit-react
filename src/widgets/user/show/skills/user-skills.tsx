import { Card, Chip, CardHeader, CardContent } from '@mui/material';

const skills = ['React', 'Next.js', 'Vue.js', 'Angular'];
export function UserSkills() {
  return (
    <Card>
      <CardHeader title="Навыки" />

      <CardContent>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
        ))}
      </CardContent>
    </Card>
  );
}
