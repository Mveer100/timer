let args = process.argv.slice(2);
//need to write a loop that will beep after a function is given an amount of time

args.forEach((element) => {
  if(isNaN(element) || !element) {
    return;
  } else if (element > 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, element*1000);
  }
})
// create a simple settimeout