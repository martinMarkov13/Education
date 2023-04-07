function timeToWalk(steps, footprint, speed) {
  let distance = steps * footprint;
  let speedMeterPerSec = speed / 3.6;
  let time = distance / speedMeterPerSec;
  let rest = Math.floor(distance / 500);

  let timeInMin = Math.floor(time / 60);
  let timeInSec = Math.round(time - timeInMin * 60);
  let timeInHour = Math.floor(time / 3600);

  console.log(
    (timeInHour < 10 ? "0" : "") +
      timeInHour +
      ":" +
      (timeInMin + rest < 10 ? "0" : "") +
      (timeInMin+rest)+
      ":" +
      (timeInMin + rest + ":" + timeInSec < 10 ? "0" : "" + timeInSec)
  );
}
timeToWalk(4000, 0.6, 5);
