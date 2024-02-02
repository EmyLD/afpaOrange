// alert("cc");
var usersArray = [
    { nom: "Macron", prenom: "Dora", email: "dora@exampledora.com", telephone: "067625252", site_web: "www.ahotmail.fr" },
    { nom: "benway", prenom: "doe", email: "doe@exampledoe.com", telephone: "067625251", site_web: "www.bhotmail.fr" }
    ,{ nom: "Philippe", prenom: "Johnny", email: "johny@examplejohn.com", telephone: "0676252553", site_web: "www.chotmail.fr" }
    ,{ nom: "Le dû", prenom: "Anabelle", email: "anabelle@examplele.com", telephone: "067625254", site_web: "www.dhotmail.fr" }
];
// Get the form element by its id
let form = document.getElementById("searchForm");
// Add an event listener for the click event

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     document.getElementById('donate').style.display = 'none';
//     document.getElementById('topMessage').style.display = 'none';
// });

form.addEventListener('submit', (e) => {
    // alert("form.addEventListener(submit, (e) =>");
    //pour qu'il se reinitialise pas
    e.preventDefault();
    try {
        let nomRecherche = document.getElementById('nomRecherche').value;
        let prenomRecherche = document.getElementById('prenomRecherche').value;
        // alert("2F cc");

        debugger;
        let user = usersArray.find(u => u.nom == nomRecherche && u.prenom.toLowerCase() == prenomRecherche.toLowerCase());
        // let user = usersArray.find(u => u.nom == nomRecherche && u.prenom == prenomRecherche );

        // Get the input elements by their names
        if (user) {
            // Set the values of the input elements to the user data

            // alert(user.prenom);

            document.getElementById('nom').value = user.nom;
            document.getElementById('prenom').value = user.prenom;
            document.getElementById('e-mail').value = user.email;
            document.getElementById('telephone').value = user.telephone;
            document.getElementById('site_web').value = user.site_web;
            // alert(user.nom);
            // Show the form
            // document.getElementById('userForm').style.display = 'block';
        } else {
            alert('User not found!');
        }
    } catch (error) {
        console.log(error);
    }

});
