const colors = ["red", "blue", "yellow", "magenta", "green"];
let count = 0;
let interval;

const effect = () => {
  const color = colors[count++ % colors.length];
  postMessage([new Date(), color]);
};

onmessage = (event) => {
  switch (event.data) {
    case "stop":
      if (interval) clearInterval(interval);
      break;
    case "start":
      effect();
      interval = setInterval(effect, 1000);
      break;
  }
};
