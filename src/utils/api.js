// Mock API for simulating real-time station congestion and probability data
export const fetchStationStatus = async (stationName) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1200));

  // Generate deterministic results based on station name for demo stability
  const nameSum = stationName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Probability between 25% and 95%
  const probability = 25 + (nameSum % 71);
  
  // Time to departure between 1 and 10 minutes (in seconds)
  const timeToDeparture = 60 + (nameSum % 540);
  
  // Line and Direction
  const lines = ['Purple Line', 'Green Line'];
  const directions = ['Towards Whitefield', 'Towards Majestic', 'Towards Silk Institute', 'Towards Nagasandra'];
  
  const line = lines[nameSum % lines.length];
  const direction = directions[nameSum % directions.length];

  return {
    stationName,
    probability,
    timeToDeparture,
    line,
    direction,
    isGo: probability > 50,
    timestamp: new Date().toISOString()
  };
};
