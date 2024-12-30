const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

const url = 'templates/partials/footer.html'
async function loadHTML(filePath, targetElementId) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${filePath}: ${response.status}`);
        }
        const content = await response.text();
        document.getElementById(targetElementId).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}
async function loadImagesFromJSON(jsonPath, targetElementId) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${jsonPath}: ${response.status}`);
        }
        const data = await response.json();
        const container = document.getElementById(targetElementId);
        data.forEach(item => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = item.image;
            img.width = 500
            img.alt = `Imagem ${item.id}`;
            figure.appendChild(img);
            container.appendChild(figure);
        });
    } catch (error) {
        console.error(error); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("../templates/partials/header.html", "header");
    loadHTML("../templates/partials/footer.html", "footer");
    loadImagesFromJSON("../data/images.json", "image__container");
});
