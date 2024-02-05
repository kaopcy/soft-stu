const colors = ["red", "blue", "yellow", "magenta", "green"];
let count = 0;
let interval;

const date = new Date();

onmessage = (event) => {
  switch (event.data) {
    case "stop":
      if (interval) clearInterval(interval);
      break;
    case "start":
      interval = setInterval(() => {
        date.setSeconds(date.getSeconds() + 1);
        const color = colors[count++ % colors.length];
        postMessage([date, color]);
      }, 1000);
      break;
  }
};
