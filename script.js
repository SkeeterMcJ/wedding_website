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
