import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Box, Grid, Link, Typography, Breadcrumbs } from '@mui/material';

import { getEmployee } from 'src/shared/api/employee';
import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _timeline } from 'src/shared/_mock';
import { AnalyticsNews } from 'src/widgets/overview/analytics-news';
import { AnalyticsTasks } from 'src/widgets/overview/analytics-tasks';
import { AnalyticsWebsiteVisits } from 'src/widgets/overview/analytics-website-visits';
import { AnalyticsWidgetSummary } from 'src/widgets/overview/analytics-widget-summary';
import { AnalyticsOrderTimeline } from 'src/widgets/overview/analytics-order-timeline';
import { AnalyticsTrafficBySite } from 'src/widgets/overview/analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from 'src/widgets/overview/analytics-current-subject';
import { AnalyticsConversionRates } from 'src/widgets/overview/analytics-conversion-rates';

import { UserSkills } from './skills';
import { UserDetails } from './details';

export function UserShow() {
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => getEmployee(id as unknown as number),
    queryKey: ['getEmployee', id],
  });

  console.log('data', data);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Профиль сотрудника
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={5}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/employees">
            Сотрудники
          </Link>
          <Typography color="text.primary">Профиль</Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={2}>
        <Grid item container xs={4} spacing={2} direction="column">
          <Grid item>
            <UserDetails data={data} />
          </Grid>

          <Grid item>
            <UserSkills />
          </Grid>

          <Grid item>
            <AnalyticsTasks title="Tasks" list={_tasks} />
          </Grid>

          <Grid item>
            <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
          </Grid>
        </Grid>

        <Grid xs={8} item container spacing={2}>
          <Grid item spacing={2} xs={12}>
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
          <Grid item container spacing={2} xs={12}>
            <Grid item xs={12} sm={6} md={4}>
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

            <Grid item xs={12} sm={6} md={4}>
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

            <Grid item xs={12} sm={6} md={4}>
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

          <Grid item xs={12}>
            <AnalyticsConversionRates
              title="Conversion rates"
              subheader="(+43%) than last year"
              chart={{
                categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
                series: [
                  { name: '2022', data: [44, 55, 41, 64, 22] },
                  { name: '2023', data: [53, 32, 33, 52, 13] },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <AnalyticsCurrentSubject
              title="Current subject"
              chart={{
                categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
                series: [
                  { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                  { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                  { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
                ],
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AnalyticsTrafficBySite
              title="Traffic by site"
              list={[
                { value: 'facebook', label: 'Facebook', total: 323234 },
                { value: 'google', label: 'Google', total: 341212 },
                { value: 'linkedin', label: 'Linkedin', total: 411213 },
                { value: 'twitter', label: 'Twitter', total: 443232 },
              ]}
            />
          </Grid>
        </Grid>
        <Grid xs={4}>{/* <Item>size=4</Item> */}</Grid>
        <Grid xs={8}>{/* <Item>size=8</Item> */}</Grid>
      </Grid>
    </DashboardContent>
  );
}
