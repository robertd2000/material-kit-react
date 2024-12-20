import type { UserFormValues } from 'src/shared/types/user';

import { UserForm } from '../form';

export function UserCreate() {
  const onSave = (data: UserFormValues) => {
    console.log('onSave', data);
  };

  const onCancel = () => {};

  return <UserForm onSave={onSave} onCancel={onCancel} buttonText={<>Создать</>} />;
}
