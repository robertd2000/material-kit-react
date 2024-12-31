export interface Employee {
  username: string;
  email: string;
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

enum GenderEnum {
  MALE = 'мужчина',
  FEMALE = 'женщина',
}

enum ProfessionEnum {
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

enum GradeEnum {
  JUNIOR = 'JUNIOR',
  MIDDLE = 'MIDDLE',
  SENIOR = 'SENIOR',
}

enum StatusEnum {
  ACTIVE = 'Активен',
  BANNED = 'Заблокирован',
}
