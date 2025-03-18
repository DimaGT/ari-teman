
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    

    // Додаємо делегування подій для всіх зображень, навіть якщо вони будуть додані пізніше
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("gallery-item") || 
            event.target.classList.contains("project-image") || 
            event.target.closest(".image-group img")) {
            
            modal.style.display = "flex";
            modalImg.src = event.target.src;
        }
    });

    // Закриття модального вікна при натисканні на "хрестик" або на фон
    document.querySelector(".close").addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });

    // Закриття при натисканні ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }
});