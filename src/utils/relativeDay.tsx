const relativeDay = (date: string) => {
  const today = new Date().toISOString().substring(0, 10);
  const dateApi = new Date(date);

  if (date === today) return 'Today';

  return dateApi.toLocaleString('en-US', { weekday: 'long' });
};

export default relativeDay;