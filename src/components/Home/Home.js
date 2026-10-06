import "./Home.css";

export default function Home() {
    const homeContainer = document.createElement("div");
    homeContainer.className = "home-container";

    const imagesContainer = document.createElement("ul");
    imagesContainer.className = "images-container";

    homeContainer.appendChild(imagesContainer);

    return homeContainer;
}