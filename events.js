// Array sa mga event objects nga ipakita sa Events page
const events = [
  {
    title: "IT Seminar",         // Title sa event
    date: "2025-12-05",          // Petsa sa event
    description: "Learn latest trends in IT.", // Short description
    image: "image2.jpg"          // Image file para sa event
  },
  {
    title: "Hackathon",
    date: "2025-12-12",
    description: "Compete in coding challenges.",
    image: "image1.jpg"
  },
  {
    title: "Alumni Meetup",
    date: "2025-12-20",
    description: "Meet past BSIT graduates.",
    image: "image.webp"
  }
];

// Kuhaon ang container nga mo-hold sa tanang events
const container = document.getElementById("events-list");

// I-loop ang tanan events array para dynamically himuon ang event cards
events.forEach(event => {
  const div = document.createElement("div"); // Himo ug <div> para sa card
  div.classList.add("card", "event-card");    // I-add ang classes para sa styling

  // I-set ang inner HTML sa card: image, title, date, ug description
  div.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <h3>${event.title}</h3>
    <p><strong>Date:</strong> ${event.date}</p>
    <p>${event.description}</p>
  `;

  // I-append ang event card sa container aron makita sa page
  container.appendChild(div);
});
