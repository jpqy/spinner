let time = 100;

// Redraws (\r) a character after a specific delay
const animate = (char, delay) => {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, delay);
};

// Loop through the rotating sticks and incrementally delay printing them
for (let char of '|/-\\|/-\\|') {
  animate(char, time);
  time += 200;
}

