const windDegreeToDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5);
  return directions[index % 16];
  // I have no idea how the math here is done but it is what it is
};

export default windDegreeToDirection;