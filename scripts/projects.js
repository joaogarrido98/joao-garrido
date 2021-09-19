document.addEventListener("DOMContentLoaded", () => {
    fetchData("all");

    tabManager();
});


function tabManager() {
    const tabs = document.getElementsByClassName('tab');
    Array.prototype.forEach.call(tabs, (tab) => {
        tab.addEventListener('click', (evt) => {
            const properties = document.querySelector(".properties");
            switch (evt.target.id) {
                case "app": properties.textContent = " \' app \' "; break
                case "web": properties.textContent = " \' web \' "; break
                default: properties.textContent = " \' all \' "; break
            }
            document.querySelector(".chosen").classList.remove("chosen");
            evt.target.classList.add("chosen");
            fetchData(tab.id);
        });
    });
}

async function fetchData(type) {
    const response = await fetch("./json/projects.json");
    const data = await response.json();
    const projects = await getProjects(data["projects"], type);
    loadProjects(projects);
}

function getProjects(projects, type) {
    let projects_list = [];

    if (type === "all") {
        return projects;
    }
    if (type === "web") {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].type === "Website") {
                projects_list.push(projects[i]);
            }
        }
        return projects_list;
    }
    if (type === "app") {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].type === "App") {
                projects_list.push(projects[i]);
            }
        }
        return projects_list;
    }
}

function loadProjects(projects) {
    const projects_gallery = document.querySelector(".projects_gallery");
    projects_gallery.innerHTML = "";
    projects.forEach(element => {
        const title = element.title;
        const description = element.description;
        const preview_image = element["preview"][0];
        const card = `
                    <img class="preview_image" src="../resources/${preview_image}"/>
                    <div class="show">
                        <div class="project_info">
                            <p class="title">${title}</p>
                            <p>${description}</p>
                            <a href="https://joaogarrido98.github.io/joao-garrido/project.html?title=${title}">View Project</a>
                        </div>
                    </div>
                    `;

        const project_item = document.createElement('div');
        project_item.classList.add("project_item");
        if (element.type === "App") {
            project_item.classList.add("project_tall");
        }
        project_item.innerHTML = card;
        document.querySelector(".projects_gallery").append(project_item);
    });
}