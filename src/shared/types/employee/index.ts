export interface Employee {
  id: number;
  username: string;
  email: string;
  profile: Profile;
}

export interface Profile {
  first_name: string;
  last_name?: string;
  age: number;
  gender: GenderEnum;
  profession: ProfessionEnum;
  interests?: string[];
  contacts: any;
  grade: GradeEnum;
  status: StatusEnum;
  salary: number;
  phone: string;
}

export enum GenderEnum {
  MALE = 'мужчина',
  FEMALE = 'женщина',
}

export enum ProfessionEnum {
  DEVELOPER = 'разработчик',
  DESIGNER = 'дизайнер',
  MANAGER = 'менеджер',
  TEACHER = 'учитель',
  DOCTOR = 'врач',
  ENGINEER = 'инженер',
  MARKETER = 'маркетолог',
  WRITER = 'писатель',
  ARTIST = 'художник',
  LAWYER = 'юрист',
  SCIENTIST = 'ученый',
  NURSE = 'медсестра',
  UNEMPLOYED = 'безработный',
}

export enum GradeEnum {
  JUNIOR = 'JUNIOR',
  MIDDLE = 'MIDDLE',
  SENIOR = 'SENIOR',
}

export enum StatusEnum {
  ACTIVE = 'Активен',
  BANNED = 'Заблокирован',
}
