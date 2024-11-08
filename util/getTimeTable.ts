export default function getTimeTable() {
  const time = [];

  for (let hour = 9; hour <= 18; hour++) {
    for (let min = 0; min < 60; min = min + 15) {
      if (min !== 0) {
        time.push(`${hour}:${min}`);
      } else if (min === 0) {
        time.push(`${hour}:00`);
      }
    }
  }
  
  time.push("19:00")

  return time;
}
