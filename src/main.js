import './style.css'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import printImages from './Utils/printImages.js';

const app = document.querySelector('#app');

app.appendChild(Header());
app.appendChild(Home());

printImages().catch((error) => {
  console.error("Error al cargar las imágenes:", error);
});
