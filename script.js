function placeTimer() {
  const date = moment('2018-11-04T23:00');
  const now = moment();
  const dur = moment.duration(date.diff(now));

  // subtract one as current day is shown in hours
  const days = Math.floor(dur.asDays()) - 1;
  const hours = dur.hours();
  const minutes = dur.minutes();
  const seconds = dur.seconds();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

placeTimer();
setInterval(placeTimer, 1000);
