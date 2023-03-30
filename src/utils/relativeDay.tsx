const relativeDay = (date: string) => {
  const today = new Date();
  const dateApi = new Date(date);

  if (dateApi.toDateString() === today.toDateString()) return 'Today';

  return dateApi.toLocaleString('en-UK', { weekday: 'long' });
};

export default relativeDay;