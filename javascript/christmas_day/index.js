const clock = document.querySelector(".clock");
function dDay() {
  const date = new Date();
  const xMax = new Date("2022-12-25");
  const getClock = xMax - date;
  const day = Math.floor(getClock / (1000 * 60 * 60 * 24) + 1);
  const hours = String(Math.floor((getClock / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((getClock / (1000 * 60)) % 60)).padStart(2, "0")
  const seconds = String(Math.floor((getClock / 1000) % 60)).padStart(2, "0");
  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

dDay();
setInterval(dDay, 1000);
