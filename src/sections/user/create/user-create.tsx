import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, TextField, Typography } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';

export function UserCreate() {
  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Create User
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
                label="Firts Name"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="last_name"
                label="Last Name"
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
                label="Email address"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="phone"
                label="Phone number"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Adress"
                name="Adress"
                id="Adress"
                aria-describedby="my-helper-text"
                minRows={5}
                placeholder="Adress"
              />
            </Grid>

            <Grid item xs={6} marginTop={4}>
              <TextField
                fullWidth
                required
                name="role"
                label="Role"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6} marginTop={4}>
              <TextField
                fullWidth
                required
                name="salary"
                label="Salary"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />{' '}
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="gender"
                label="Gender"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="Status"
                label="Status"
                InputLabelProps={{ shrink: true }}
                type="text"
                sx={{ mb: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Education"
                name="Education"
                id="Education"
                aria-describedby="my-helper-text"
                minRows={5}
                placeholder="Education"
              />
            </Grid>
          </Grid>

          <Grid container marginTop={4} spacing={2}>
            <Grid item>
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                // onClick={handleSignIn}
              >
                Create
              </LoadingButton>
            </Grid>

            <Grid item>
              <LoadingButton
                size="large"
                color="inherit"
                variant="contained"
                // onClick={handleSignIn}
              >
                Cancel
              </LoadingButton>{' '}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </DashboardContent>
  );
}
