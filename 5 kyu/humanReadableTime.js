

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  let pad = (num) => num < 10 ? '0' + num : num;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;


}