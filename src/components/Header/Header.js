import printImages from "../../Utils/printImages.js";
import "./Header.css";

export default function Header() {
    const header = document.createElement("header");
    header.className = "header";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";

    const searchButton = document.createElement("button");
    searchButton.className = "search-button";
    searchButton.textContent = "🔎";

    header.append(searchInput, searchButton);

    const search = async () => {
        const query = searchInput.value.trim();
        if (!query) return;

        try {
            await printImages(query);
        } catch (error) {
            console.error("Error al buscar en Unsplash:", error);
        }
    };

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") search();
    });
    searchButton.addEventListener("click", search);

    return header
}