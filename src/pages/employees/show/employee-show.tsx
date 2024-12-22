import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { UserShow } from 'src/widgets/user/show';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Сотрудники - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserShow />
    </>
  );
}
