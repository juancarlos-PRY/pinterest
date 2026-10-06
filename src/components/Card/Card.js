import "./Card.css";

export default function CardImg(imageData){
    const cardContainer = document.createElement("li");
    cardContainer.className = "cardimg";

    const image = document.createElement("img");
    image.src = imageData.urls.small;
    image.alt = imageData.alt_description ?? "Unsplash photo";
    image.className = "card-images";
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Ampliar imagen");

    const openModal = () => {
        const modal = document.createElement("div");
        modal.className = "image-modal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-label", image.alt);

        const enlargedImage = document.createElement("img");
        enlargedImage.src = imageData.urls.regular;
        enlargedImage.alt = image.alt;
        enlargedImage.className = "image-modal-content";

        const closeButton = document.createElement("button");
        closeButton.className = "image-modal-close";
        closeButton.type = "button";
        closeButton.textContent = "×";
        closeButton.setAttribute("aria-label", "Cerrar imagen");

        const handleKeydown = (event) => {
            if (event.key === "Escape") closeModal();
        };

        const closeModal = () => {
            modal.remove();
            document.removeEventListener("keydown", handleKeydown);
            image.focus();
        };

        closeButton.addEventListener("click", closeModal);
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal();
        });

        modal.append(enlargedImage, closeButton);
        document.body.appendChild(modal);
        document.addEventListener("keydown", handleKeydown);
        closeButton.focus();
    };

    image.addEventListener("click", openModal);
    image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal();
        }
    });

    const imageOne = document.createElement("p");
    imageOne.className = "image-one";
    imageOne.textContent = imageData.user.name;

    const likes = document.createElement("p");
    likes.className = "card-likes";
    likes.textContent = `${imageData.likes} ❤️`;

    cardContainer.append(image, imageOne, likes);

    return cardContainer;
}