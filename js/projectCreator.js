const webProjectsData = [
    {
        img: "img/thumb/cafe_template_thumb.jpg",
        title: "cafe_title",
        description: "cafe_description",
        stack: ["ASP.NET Core 5.0", "SQLite"],
        preview: "https://github.com/KartaB/cafe-template",
        github: "https://github.com/KartaB/cafe-template",
        images: [
            "img/gallery/cafe/cafe_main.jpg",
            "img/gallery/cafe/cafe_menu.jpg",
            "img/gallery/cafe/cafe_menu_edit.jpg",
            "img/gallery/cafe/cafe_gallery.jpg",
            "img/gallery/cafe/cafe_gallery_zoom.jpg",
            "img/gallery/cafe/cafe_gallery_edit.jpg",
            "img/gallery/cafe/cafe_blog.jpg",
            "img/gallery/cafe/cafe_about.jpg",
            "img/gallery/cafe/cafe_lang_select.jpg",
            "img/gallery/cafe/cafe_login.jpg"
        ],
        details: {
            goals: "cafe_goals",
            difficulties: "cafe_difficulties",
            stack_explained: "cafe_stack"
        }
    }
]

const personalProjectsData = [
    {
        img: "https://camo.githubusercontent.com/12ba15e6d806debe0954586b6ce58e71e0b33fc41b5bfcfcab08aa3e545e0c95/68747470733a2f2f692e696d6775722e636f6d2f634b564d6935522e706e67",
        title: "converter_title",
        description: "converter_description",
        stack: [".NET Core 5.0", "C#"],
        preview: "https://github.com/KartaB/bsp-converter",
        github: "https://github.com/KartaB/bsp-converter",
        images: [
            "https://camo.githubusercontent.com/2135e7c10e1b9d0050ec7b66ebf979f811a1010562f8789573b5d11dbaf6d949/68747470733a2f2f692e696d6775722e636f6d2f63616d333939692e706e67",
            "https://camo.githubusercontent.com/8a6d92a14c64d0014dece007e2547f3bd55e5ebe7da537138cde2b080d89ba2d/68747470733a2f2f692e696d6775722e636f6d2f3030446f7839572e706e67"
        ],
        details: {
            goals: "converter_goals",
            difficulties: "converter_difficulties",
            stack_explained: "converter_stack"
        }
    },
    {
        img: "https://camo.githubusercontent.com/c3b88b9cf064429a5ad0679040ac7bf5df965da5e4e90d17724a6901ca71d56e/68747470733a2f2f737465616d75736572696d616765732d612e616b616d616968642e6e65742f7567632f313735313330353235323930353935333833362f413436453636383841444634324441363134304336463836454632324633334232463243354244342f",
        title: "bomber_title",
        description: "bomber_description",
        stack: ["Lua API"],
        preview: "https://steamcommunity.com/sharedfiles/filedetails/?id=2365429409",
        github: "https://github.com/KartaB/coduo-bomber",
        details: {
            goals: "bomber_goals",
            difficulties: "bomber_difficulties",
            stack_explained: "bomber_stack"
        }
    },
    {
        img: "img/thumb/ecs_game_engine_thumb.jpg",
        title: "ecs_title",
        description: "ecs_description",
        stack: ["JavaScript ES6"],
        preview: "/",
        github: "https://github.com/KartaB/ecs_game_engine",
        details: {
            goals: "ecs_goals",
            difficulties: "ecs_difficulties",
            stack_explained: "ecs_stack"
        }
    }
]

function CreateProjectCard(data, name) {
    const stackData = data.stack.map((item) => `<li>${item}</li>`).join("\n");

    data.images = data.images || [];
    const galleryData = data.images.map((item) => `<img src="${item}" data-fancybox="${name}" loading="lazy" class="d-none">`).join("\n");

    return (
    `
    <div class="col-xl-4 col-lg-6 mb-5 mb-xl-0 mx-auto">
        <div class="project-card mx-auto">
            <a class="project__image_container" href="${data.img}" data-fancybox="${name}">
                <img src="${data.img}">
            </a>

            <div class="project__name my-4 text-center text-primary" data-localizer="${data.title}"></div>
            <div class="project__description mx-5 text-secondary text-center" data-localizer="${data.description}"></div>
            
            <div class="text-primary mt-5 mb-4 text-center" data-localizer="technologies_used"></div>
            <ul class="list-unstyled d-flex justify-content-around mx-5 text-white">
                ${stackData}
            </ul>

            <ul class="list-unstyled d-flex justify-content-around mx-3 mx-lg-5 py-5 text-white">
                <a href="${data.preview}" class="project-card-btn px-2" target="_blank" data-localizer="live_preview"></a>
                <a data-bs-toggle="modal" href="#modal_${name}" class="project-card-btn px-2" data-localizer="details"></a>
                <a href="${data.github}" class="project-card-btn px-2" target="_blank" data-localizer="code"></a>
            </ul>
        </div>
    </div>

    <div class="modal fade" id="modal_${name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content project-modal-details">
                <div class="modal-header">
                    <h5 class="modal-title project-modal-title" id="exampleModalLabel"><span data-localizer="${data.title}"></span> - <span data-localizer="modal_details"></span></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="project-modal-section">
                        <div class="project-modal-header"><span data-localizer="modal_goals"></span>: </div>
                        <div class="project-modal-description" data-localizer="${data.details.goals}"></div>
                    </div>
                    
                    <div class="project-modal-section">
                        <div class="project-modal-header"><span data-localizer="modal_difficulties"></span>: </div>
                        <div class="project-modal-description" data-localizer="${data.details.difficulties}"></div>
                    </div>

                    <div class="project-modal-section">
                        <div class="project-modal-header"><span data-localizer="modal_stack"></span>: </div>
                        <div class="project-modal-description" data-localizer="${data.details.stack_explained}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${galleryData}`);
}

function CreateCategoryWithProjects(projectsData, parent) {
    const parsedProjectCards = [];

    let i = 0;
    for (const data of projectsData) {
        parsedProjectCards.push( CreateProjectCard(data, `${parent.id}_${i++}`) );
    }

    const projectsHTML = (
    `<div class="container py-5">
        <div class="row">
            ${parsedProjectCards.join("\n")}
        </div>
    </div>`);

    parent.insertAdjacentHTML("afterend", projectsHTML);
}

CreateCategoryWithProjects(webProjectsData, document.querySelector("#webProjects"));
CreateCategoryWithProjects(personalProjectsData, document.querySelector("#personalProjects"));