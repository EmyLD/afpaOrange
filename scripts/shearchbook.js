// Création d'un tableau de livres
let livres = [
    {"titre": "1984", "auteur": "George Orwell"},
    {"titre": "Le Seigneur des Anneaux", "auteur": "J.R.R. Tolkien"},
    {"titre": "Le Petit Prince", "auteur": "Antoine de Saint-Exupéry"},
    {"titre": "Moby Dick", "auteur": "Herman Melville"},
    {"titre": "Orgueil et Préjugés", "auteur": "Jane Austen"},
    {"titre": "Guerre et Paix", "auteur": "Léon Tolstoï"},
    {"titre": "Ulysse", "auteur": "James Joyce"},
    {"titre": "Don Quichotte", "auteur": "Miguel de Cervantes"},
    {"titre": "Les Misérables", "auteur": "Victor Hugo"},
    {"titre": "La Divine Comédie", "auteur": "Dante Alighieri"}
];

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
e.preventDefault;

// console.log(livres.length);
    for  (let i = 0; i < livres.length ; i++) {
        if (document.getElementById("name").value == livres[i].titre){
            console.log("oui");    
        }
        else {
            console.log(livres[i].titre);
        }
    }
}
);

