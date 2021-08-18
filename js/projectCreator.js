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
            
            <div class="project__stack mt-5 mb-4 text-center" data-localizer="technologies_used"></div>
            <ul class="project__stack_list list-unstyled d-flex justify-content-around mx-5 text-white">
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
                    <h5 class="modal-title project-modal-title" id="exampleModalLabel"><strong data-localizer="${data.title}"></strong> - <span data-localizer="modal_details"></span></h5>
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

                    <div class="project-modal-section">
                        <div class="project-modal-header"><span data-localizer="modal_learned"></span>: </div>
                        <div class="project-modal-description" data-localizer="${data.details.learned_things}"></div>
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