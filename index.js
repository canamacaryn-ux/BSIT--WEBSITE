// Kuhaon ang button nga naay class nga "btn" ug i-add ang click event listener
document.querySelector(".btn").addEventListener("click", function(e){
  e.preventDefault(); // Pugngan ang default behavior sa link (dili mo-redirect)
  // Scroll smoothly padulong sa section nga naay class nga "features"
  document.querySelector(".features").scrollIntoView({behavior:"smooth"});
});

// Kuhaon tanan <a> links sa navigation
document.querySelectorAll("nav a").forEach(link=>{
  // Kung ang link nagmatch sa current page URL, i-add ang "active" class
  if(link.href===window.location.href) link.classList.add("active");
});

// Array sa features nga ipakita sa "Highlights" section
const features = [
  {title:"Quality Education", description:"Industry-ready curriculum and hands-on learning."},
  {title:"Active Community", description:"BSIT events, competitions, and student organizations."},
  {title:"Professional Training", description:"Workshops, certifications, and career guidance."}
];

// Kuhaon ang container nga grid diin ipakita ang mga cards
const grid = document.querySelector(".grid");

// I-loop ang features array ug himoong dynamic cards
features.forEach(item=>{
  const div = document.createElement("div"); // Himo ug <div> para sa card
  div.classList.add("card"); // I-add ang "card" class para sa styling
  // I-set ang inner HTML sa card: title ug description
  div.innerHTML=`<h3>${item.title}</h3><p>${item.description}</p>`;
  // I-append ang card sa grid container
  grid.appendChild(div);
});
