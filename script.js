document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rsvpForm");
  const responseMessage = document.getElementById("responseMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value;
      const attendance = form.attendance.value;

      responseMessage.textContent = `Thank you, ${name}. RSVP recorded as: ${attendance === "yes" ? "Attending 🎉" : "Sorry you can't make it 😢"}`;
      form.reset();
    });
  }
});

const targetDate = new Date("2026-05-23T16:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "Event Started!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Call it once immediately

document.addEventListener('DOMContentLoaded', function () {
  const events = document.querySelectorAll('.timeline-event');

  events.forEach(event => {
    event.addEventListener('click', () => {
      events.forEach(e => e.classList.remove('active'));
      event.classList.add('active');
    });
  });
});
