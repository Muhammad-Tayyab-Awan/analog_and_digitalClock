setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(`${hours} : ${minutes} + ${seconds}`);
  let hour_needle = document.querySelector(".hours");
  let minute_needle = document.querySelector(".minutes");
  let second_needle = document.querySelector(".seconds");
  hour_needle.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  minute_needle.style.transform = `rotate(${6 * minutes}deg)`;
  second_needle.style.transform = `rotate(${6 * seconds}deg)`;
}, 1000);
