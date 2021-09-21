document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    fetchData(title).then(response => {
        console.log(response);
    });
});

async function fetchData(title) {
    const response = await fetch("./json/projects.json");
    const data = await response.json();
    const projects = data["projects"];
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        if (project.title = title) {
            return project;
        }
    }
}