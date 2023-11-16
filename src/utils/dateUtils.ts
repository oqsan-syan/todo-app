import dayjs, { Dayjs } from 'dayjs';

export function isDateExpired(deadline: Dayjs | null) {
  const currentDate = dayjs();
  const deadlineDate = dayjs(deadline);

  return currentDate.isAfter(deadlineDate, 'day') && !currentDate.isSame(deadlineDate, 'day');
}
