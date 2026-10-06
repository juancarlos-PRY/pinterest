import CardImg from "../components/Card/Card";
import fetchApi from "./fetchApi";


export default async function printImages(query) {
    const imagesContainer = document.querySelector(".images-container");
    if (!imagesContainer) {
        throw new Error("No se encontró el contenedor de imágenes.");
    }

    const images = await fetchApi(query);
    imagesContainer.replaceChildren();

    images.forEach((image) => {
        imagesContainer.appendChild(CardImg(image));
    });
}