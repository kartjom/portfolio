function CreateProjectCard(data, name) {
    const stackData = data.stack.map((item) => `<li>${item}</li>`).join("\n");

    data.images = data.images || [];
    const galleryData = data.images.map((item) => `<img src="${item}" data-fancybox="${name}" loading="lazy" class="d-none">`).join("\n");

    return (
    `
	<div class="project-card p-0 mx-lg-3 mb-5">
		<div class="mx-auto w-100">
			<a class="project__image_container" href="${data.img}" data-fancybox="${name}">
				<img src="${data.img}">
			</a>

			<div class="project__name my-4 text-center text-primary" data-localizer="${data.title}"></div>
			<div class="project__description mx-5 text-secondary text-center" data-localizer="${data.description}"></div>
			
			<div class="project__stack mt-5 mb-4 text-center" data-localizer="technologies_used"></div>
			<ul class="project__stack_list list-unstyled d-flex justify-content-evenly mx-5 text-white">
				${stackData}
			</ul>

			<ul class="list-unstyled d-flex justify-content-around mx-3 mx-lg-5 py-5 text-white text-center">
				${ data.preview !== undefined ? `<a href="${data.preview}" class="project-card-btn px-2" target="_blank" data-localizer="preview"></a>` : "" }
				${ data.preview_modal !== undefined ? `<a data-bs-toggle="modal" href="${data.preview_modal}" class="project-card-btn px-2" data-localizer="preview"></a>` : "" }
				<a href="${data.github}" class="project-card-btn px-2" target="_blank" data-localizer="code"></a>
			</ul>
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
        <div class="row d-flex justify-content-center">
            ${parsedProjectCards.join("\n")}
        </div>
    </div>`);

    parent.insertAdjacentHTML("afterend", projectsHTML);
}

CreateCategoryWithProjects(projectsData, document.querySelector("#personalProjects"));