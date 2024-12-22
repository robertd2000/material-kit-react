import { Box, Grid, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { AnalyticsWebsiteVisits } from 'src/widgets/overview/analytics-website-visits';
import { AnalyticsWidgetSummary } from 'src/widgets/overview/analytics-widget-summary';

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
        <Grid item xs={4} spacing={2}>
          <Grid item>
            <UserDetails />
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <UserSkills />
          </Grid>
        </Grid>
        <Grid xs={8} item>
          <Grid item spacing={2}>
            <AnalyticsWebsiteVisits
              title="Website visits"
              subheader="(+43%) than last year"
              chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                series: [
                  { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                  { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
                ],
              }}
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid xs={12} sm={6} md={3}>
              <AnalyticsWidgetSummary
                title="New users"
                percent={-0.1}
                total={1352831}
                color="secondary"
                icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                  series: [56, 47, 40, 62, 73, 30, 23, 54],
                }}
              />
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <AnalyticsWidgetSummary
                title="Purchase orders"
                percent={2.8}
                total={1723315}
                color="warning"
                icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                  series: [40, 70, 50, 28, 70, 75, 7, 64],
                }}
              />
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <AnalyticsWidgetSummary
                title="Messages"
                percent={3.6}
                total={234}
                color="error"
                icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                  series: [56, 30, 23, 54, 47, 40, 62, 73],
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid xs={8}>{/* <Item>size=8</Item> */}</Grid>
      </Grid>
    </DashboardContent>
  );
}
