const clockTitle = document.querySelector(".js-clock");

function clock() {
  const time_now = new Date();
  let time_target = new Date(time_now.getFullYear(), 11, 24, 0, 0);

  if (time_now > time_target) {
    time_target = new Date(time_now.getFullYear() + 1, 11, 24, 0, 0);
  }

  // millisecond unit to second unit
  const gap = (time_target - time_now) / 1000;

  // weird and global earth time periods unit
  // 1 sec for 1 unit
  const unit_12 = 12;
  const unit_24 = 24;
  const unit_60 = 60;
  const day_unit = unit_60 * unit_60 * unit_24;
  const hour_unit = unit_60 * unit_60;
  const minute_unit = unit_60;

  const days = String(Math.floor(gap / day_unit)).padStart(3, "0");
  const hours = String(Math.floor((gap % day_unit) / hour_unit)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((gap % hour_unit) / minute_unit)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor(gap % minute_unit)).padStart(2, "0");

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
clock();
setInterval(clock, 1000);
