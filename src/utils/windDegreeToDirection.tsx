const windDegreeToDirection = (degrees: number): string => {
  // this was done for OpenWeatherMap API, which doesn't provide directions.
  // still works and looks good so I'm leaving it
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5);
  return directions[index % 16];
  // I have no idea how the math here is done but it is what it is
};

export default windDegreeToDirection;