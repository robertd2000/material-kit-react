import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { UserCreate } from 'src/widgets/user/create';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserCreate />
    </>
  );
}
