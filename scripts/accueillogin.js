// --------------- Fonction pour se connecter ---------------

function validerConnexion() {
    let profile = document.getElementById("blockprofile");
    let log = document.getElementById("blocklog");

    log.style.display = "none";
    profile.style.display = "block";
}

// --------------- Fonction pour se déconnecter ---------------

function deconnexion() {
    let log = document.getElementById("blocklog");
    let profile = document.getElementById("blockprofile");
    let msg = document.getElementById("msgDeconnexion");

    msg.style.display = "block";
    profile.style.display = "none";
    log.style.display = "block";
}

// --------------- Fonction pour s'inscrire ---------------

function inscription() {
    let signup = document.getElementById("blocksignup");
    let log = document.getElementById("blocklog");

    log.style.display = "none";
    signup.style.display = "block";
}

// --------------- Fonction pour valider l'inscription ---------------

function validerInscription() {
    let profile = document.getElementById("blockprofile");
    let signup = document.getElementById("blocksignup");

    signup.style.display = "none";
    profile.style.display = "block";

}























// --------------- Fonction pour se connecter avec le back-end ---------------

// function validerConnexion() {
//     let identifiant = document.getElementById("emailOrPseudo").value;
//     let pass = document.getElementById("password").value;

//     if (identifiant === "identifiantBack" && pass === "motDePasseBack") {
//         afficherSection();
//     } else {
//         alert("L'identifiant ou le mot de passe est incorrect");
//     }
// }


// afficherSection() {
//     let section = document.getElementById("blockprofile");
//     section.style.display = block;
// }

// --------------- Fonction pour se déconnecter avec le back-end ---------------