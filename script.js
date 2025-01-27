// Tableau des maisons, appartements et terrains invisibles au début
const biens = [
    {
        id: 1,
        type: "maison",
        prix: 350000,
        image: "images/maison1.jpg",
        nom: "Maison 1",
        description: "Belle maison avec jardin.",
        option: "acheter"
    },
    {
        id: 2,
        type: "appartement",
        prix: 200000,
        image: "images/appartinter.webp",
        nom: "Appartement 1",
        description: "Appartement moderne avec vue.",
        option: "louer"
    },
    {
        id: 3,
        type: "terrain",
        prix: 100000,
        image: "images/terrain1.jpg",
        nom: "Terrain 1",
        description: "Terrain idéal pour construire.",
        option: "acheter"
    },
    {
        id: 4,
        type: "maison",
        prix: 355000,
        image: "images/maison2.jpg",
        nom: "Maison 2",
        description: "Belle maison avec jardin.",
        option: "louer"
    },
    {
        id: 5,
        type: "appartement",
        prix: 220000,
        image: "images/appartemnts.jpg",
        nom: "Appartement 2",
        description: "Appartement moderne avec terrasse.",
        option: "acheter"
    },
    {
        id: 6,
        type: "terrain",
        prix: 150000,
        image: "images/terrain2.jpg",
        nom: "Terrain 2",
        description: "Grand terrain à bâtir.",
        option: "louer"
    }
];



// Fonction pour effectuer la recherche
function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const prixMax = document.getElementById('prixInput').value;
    const typeBien = document.getElementById('typeBien').value;
    const locationOption = document.getElementById('locationOption').value;

    // Filtrer les résultats en fonction des critères de recherche
    const filteredBiens = biens.filter(bien => 
        (bien.nom.toLowerCase().includes(searchTerm) ||
        bien.type.toLowerCase().includes(searchTerm) ||
        bien.description.toLowerCase().includes(searchTerm)) &&
        (!prixMax || bien.prix <= prixMax) && 
        (typeBien === "tous" || bien.type === typeBien) &&
        (locationOption === "tous" || bien.option === locationOption)
    );

    // Afficher les résultats de la recherche
    displayResults(filteredBiens);
}

function displayResults(results) {
    const biensList = document.getElementById('biensList');
    biensList.innerHTML = ''; // Effacer les résultats précédents

    if (results.length === 0) {
        biensList.innerHTML = '<p>Aucun bien trouvé.</p>';
    } else {
        results.forEach(function(bien) {
            const card = document.createElement('div');
            card.classList.add('biens-card');
            card.setAttribute('data-type', bien.type);
            card.setAttribute('data-prix', bien.prix);

            // Création de l'image
            const img = document.createElement('img');
            img.src = bien.image;
            img.alt = bien.nom;

            // Modifier la taille de l'image
            img.style.width = "25px"; // Modifier la largeur
            img.style.height = "18px"; // Modifier la hauteur

            // Création du lien
            const link = document.createElement('a');
            link.href = `detail.html?id=${bien.id}`;

            // Ajout du contenu au lien
            link.appendChild(img);
            link.innerHTML += `
                <h3>${bien.nom}</h3>
                <p>Prix: ${bien.prix.toLocaleString()} CFA</p>
                <p>Description: ${bien.description}</p>
                <p>Option: ${bien.option.charAt(0).toUpperCase() + bien.option.slice(1)}</p>
            `;

            // Ajout du lien à la carte
            card.appendChild(link);
            biensList.appendChild(card);
        });
    }
}
