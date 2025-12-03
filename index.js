document.querySelector(".btn").addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".features").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll("nav a").forEach(link=>{
  if(link.href===window.location.href) link.classList.add("active");
});

const features = [
  {title:"Quality Education", description:"Industry-ready curriculum and hands-on learning."},
  {title:"Active Community", description:"BSIT events, competitions, and student organizations."},
  {title:"Professional Training", description:"Workshops, certifications, and career guidance."}
];
const grid = document.querySelector(".grid");
features.forEach(item=>{
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML=`<h3>${item.title}</h3><p>${item.description}</p>`;
  grid.appendChild(div);
});