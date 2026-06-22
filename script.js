// DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

// track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // Increment count
  count++;

  // Update attendee count display
  attendeeCount.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;

  // update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Welcome Message
  if (count === maxCount) {
    greeting.textContent = `🎉 ${name} from ${teamName}! The event is now full!`;
    document.querySelector(".container").classList.add("celebration");
  } else {
    greeting.textContent = `Welcome, ${name} from ${teamName}!`;
    document.querySelector(".container").classList.remove("celebration");
  }

  greeting.classList.add("success-message");
  greeting.style.display = "block";

  form.reset();
});
