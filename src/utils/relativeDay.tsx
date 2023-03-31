import { format, isToday, parseISO } from 'date-fns';

const relativeDay = (date: string):string => {
  // I am never using js Date again
  const dateApi = parseISO(date);
  if (isToday(dateApi)) return 'Today';
  return format(dateApi, 'EEEE');
};

export default relativeDay;