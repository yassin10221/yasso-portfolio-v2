// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 700);
});

// Projects Container
const container = document.getElementById("projectsContainer");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

let allProjects = [];
// Load Projects
fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => {

        allProjects = projects;
displayProjects(allProjects);

    });

// Display Function

function displayProjects(projects){

container.innerHTML="";

projects.forEach(project=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${project.image}">

<div class="card-content">

<h3>${project.title}</h3>

<p>${project.category}</p>

<a href="project.html?id=${project.id}" class="view-btn">

View Details

</a>

</div>

`;

container.appendChild(card);

});

}
function filterProjects(){

const text = searchInput.value.toLowerCase();

const category = filterSelect.value;

const filtered = allProjects.filter(project=>{

const matchText =

project.title.toLowerCase().includes(text);

const matchCategory =

category==="all" ||

project.category===category;

return matchText && matchCategory;

});

displayProjects(filtered);

}

searchInput.addEventListener("input",filterProjects);

filterSelect.addEventListener("change",filterProjects);