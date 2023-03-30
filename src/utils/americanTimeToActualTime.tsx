const americanTimeToActualTime = (timeUS: string): string => {
  const [time, mod] = timeUS.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') hours = '00';
  if (mod === 'PM') hours = String(Number(hours) + 12);

  return `${hours}:${minutes}`;
};

export default americanTimeToActualTime;