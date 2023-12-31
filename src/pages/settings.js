// import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
// import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
// import { BasicTabs } from 'src/sections/mysettings/settings-tabs';
// import BasicTabs from "./settings"
// import { BasicTabs } from '../../src/sections/mysettings/settings-tabs';
// import BasicTabs from '../../src/sections/mysettings/settings-tabs';
import BasicTabs from '../../src/sections/settings/settings';



const Page = () => (
  <>
    {/* <Head>
      <title>
        Settings | Devias Kit
      </title>
    </Head> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Settings
          </Typography>
          <BasicTabs />
        </Stack>
      </Container>
    </Box>
  </>
);

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Page;
