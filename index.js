let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

self.addEventListener('message', (e) => {
  const { command, delay } = e.data;

  if (command === 'start') {
    timer = setInterval(() => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
          minutes = 0;
          hours++;

          if (hours === 24) {
            hours = 0;
          }
        }
      }

      self.postMessage({ hours, minutes, seconds });
      console.log(`Seconds: ${seconds}`);
    }, delay);
  } else if (command === 'stop') {
    clearInterval(timer);
  }
});
