// Get Project ID From URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// Elements
const title = document.getElementById("projectTitle");
const image = document.getElementById("projectImage");
const description = document.getElementById("description");
const technologies = document.getElementById("technologies");
const features = document.getElementById("features");
const websiteBtn = document.getElementById("websiteBtn");
const githubBtn = document.getElementById("githubBtn");
const previewFrame = document.getElementById("previewFrame");

// Load Projects
fetch("data/projects.json")
  .then((res) => res.json())
  .then((projects) => {

    const project = projects.find((p) => p.id === projectId);

    if (!project) {
      document.body.innerHTML = `
        <div style="
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          font-family:Poppins,sans-serif;
          color:white;
          background:#0f172a;
          flex-direction:column;
        ">
            <h1>404</h1>
            <p>Project Not Found</p>
            <a href="index.html"
               style="
                  margin-top:20px;
                  padding:14px 30px;
                  background:#2563eb;
                  color:white;
                  text-decoration:none;
                  border-radius:8px;
               ">
               Back Home
            </a>
        </div>
      `;
      return;
    }

    // Basic Info
    title.textContent = project.title;
    image.src = project.image;
    image.alt = project.title;
    description.textContent = project.description;

    // Technologies
    technologies.innerHTML = "";
    project.technologies.forEach((tech) => {
      technologies.innerHTML += `<span>${tech}</span>`;
    });

    // Features
    features.innerHTML = "";
    project.features.forEach((feature) => {
      features.innerHTML += `<span>${feature}</span>`;
    });

    // Buttons
    websiteBtn.href = project.website;
    githubBtn.href = project.github;

    // Preview
    previewFrame.src = project.website;

    // لو الموقع منع iframe
    previewFrame.onerror = () => {
      document.querySelector(".preview").innerHTML = `
        <h2>Website Preview</h2>

        <p style="margin:20px 0;color:#94a3b8;">
          This website doesn't allow preview inside an iframe.
        </p>

        <a href="${project.website}"
           target="_blank"
           class="btn">
           Open Website
        </a>
      `;
    };

  })
  .catch(() => {
    document.body.innerHTML = `
      <h1 style="
      color:white;
      text-align:center;
      margin-top:100px;">
      Failed to load project.
      </h1>
    `;
  });