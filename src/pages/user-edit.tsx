import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { UserEdit } from 'src/sections/user/edit';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserEdit />
    </>
  );
}
