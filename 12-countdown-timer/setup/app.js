const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//let futuredate = new Date();
let futuredate = new Date(2022, 3, 24, 20, 30, 0);
const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const mins = futuredate.getMinutes();
let month = futuredate.getMonth();
let date = futuredate.getDate();
const weekday = futuredate.getDay();
giveaway.textContent = `giveaway ends on ${weekdays[weekday]} ${date} ${months[month]} ${year} ${hours}:${mins}pm`;
let futuretime = futuredate.getTime();
function getremainingtime() {
  const today = new Date().getTime();
  let rt = futuretime - today;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const min = 60 * 1000;
  let days = rt / day;
  days = Math.floor(days);
  let hours = (rt % day) / hour;
  hours = Math.floor(hours);
  let minutes = Math.floor((rt % hour) / min);
  let seconds = Math.floor((rt % min) / 1000);
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (rt < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry,the giveaway has ended</h4>`;
  }
}
let countdown = setInterval(getremainingtime, 1000);
getremainingtime();
