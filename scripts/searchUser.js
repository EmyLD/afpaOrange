let usersArray = [
    { nom: "Macron", prenom: "Dora", email: "dora@exampledora.com", telephone: "067625252", site_web: "www.ahotmail.fr", commentaire: "fqfdqdfqsdfqsdf qd fqsdf", images:"../images/carla.jpg" },
    { nom: "benway", prenom: "doe", email: "doe@exampledoe.com", telephone: "067625251", site_web: "www.bhotmail.fr", commentaire: "fqfdqdfqsdfqsdf qd fqsdf", images:"../images/david.jpg" },
    { nom: "pi", prenom: "po", email: "johny@examplejohn.com", telephone: "0676252553", site_web: "www.chotmail.fr"},
    { nom: "Le dû", prenom: "belle", email: "anabelle@examplele.com", telephone: "067625254", site_web: "www.dhotmail.fr", images: "../images/carla.jpg"  }
];
const msgeNonTrouve = "Utilisateur non trouvé";
// Get the form element by its id
let form = document.getElementById("searchForm");
// Add an event listener for the click event
form.addEventListener('submit', (e) => {
    //pour qu'il se reinitialise pas
    e.preventDefault();
    try {
        let nomRecherche = document.getElementById('nomRecherche').value;
        let prenomRecherche = document.getElementById('prenomRecherche').value;

        let user = usersArray.find(u => u.nom.toLowerCase() == nomRecherche.toLowerCase() && u.prenom.toLowerCase() == prenomRecherche.toLowerCase());

        if (user) {
            document.getElementById('nom').value = user.nom;
            document.getElementById('prenom').value = user.prenom;
            document.getElementById('e-mail').value = user.email;
            document.getElementById('telephone').value = user.telephone;
            document.getElementById('site_web').value = user.site_web;
            if (user.commentaire != undefined) {
                document.getElementById('commentaire').value = user.commentaire;
            }
            if (user.images != undefined) {
                document.getElementById('myImage').src  = user.images;
            }            
            else {
                document.getElementById('myImage').src  = "../images/nophoto.jpg";
            }
            document.getElementById('message').textContent = "";
        } else {
            document.getElementById('message').textContent = msgeNonTrouve;
        }
    } catch (error) {
        console.log(error);
    }

});
