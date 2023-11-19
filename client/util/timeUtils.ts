export function convertMillisToTime(millis: number): string {
  if (typeof millis !== 'number' || isNaN(millis)) {
    return 'Invalid input';
  }

  let seconds = Math.floor(millis / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(convertMillisToTime(10000000)); // 02:46:40
