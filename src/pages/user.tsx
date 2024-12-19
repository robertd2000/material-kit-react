import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UserView } from 'src/widgets/user/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Сотрудники - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserView />
    </>
  );
}
