import { object, string, date } from 'yup';

export const validationSchema = object({
  title: string().required('Title is required'),
  description: string(),
  deadline: date().nullable(),
});
