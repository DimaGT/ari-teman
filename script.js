document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.swiper-wrapper');

    let filteredCategories = categories?.filter((item) => item?.active);

    filteredCategories.forEach((category, index) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <img src="${category.image}" class="slider-item ${
            index === 0 ? ' active' : ''
        }">
            <div class="slider-item-label">${category.name}</div>
        `;

        slide.addEventListener('click', () => {
            updateProjects(category.name);
            document
                .querySelectorAll('.slider-item')
                .forEach((item) => item.classList.remove('active'));
            slide.querySelector('.slider-item').classList.add('active');
        });

        sliderContainer.appendChild(slide);
    });

    new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
        },
    });

    function updateProjects(categoryName) {
        const projectsContainer = document.querySelector('.projects-list');
        projectsContainer.innerHTML = '';
        (projectsData[categoryName] || []).forEach((project) => {
            const projectEl = document.createElement('div');
            projectEl.classList.add('project-item');
            projectEl.innerHTML = `
                <a href="category.html?category=${categoryName}&project=${project.title}">
                    <img src="${project.image}" alt="${project.title}">
                </a>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            projectsContainer.appendChild(projectEl);
        });
    }

    updateProjects(filteredCategories[0].name);
});
