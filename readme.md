* Style 

Pour chaque nouvel page HTML, ajouter un ID à la balise main correspondant à votre feature qu'on utilisera dans le fichier scss.


1/ Créer un fichier SCSS pour sa feature
2 / L'importer dans files_import.scss
3 / Déclarer un id dans la balise MAIN de son fichier HTML
4 / Tout concaténer dans l'id dans son fichier scss
    -> exemple : pour la page login
        -> je créé une page login.html
            . Je déclare une balise main avec un id #login
        -> je créé un fichier login.scss
            . J'importe ce fichier dans files_import.scss
            . Je lance la commande : sass --watch css/files_import.scss style.css
            . Au tout début de mon fichier j'inscris ma déclaration d'id concernant ma page : 
                . #login { ... }



Coder sa feature :

1/ Je choisis ma feature
2/ Exemple : j'ai choisi de coder la page de profil
3/ Je clique sur le nom de la branche actuelle en bas à gauche de vs code.
4/ S'ouvre dans la bar en haut au milieu le possiblité de "CREER UNE BRANCHE A PARTIR DE :"
5/ je clique sur cette option et je déclare le nom de ma branche. 
    -> le nom doit correspondre à la feature sur laquelle je suis positionné(e).

6/ Une fois que j'ai terminé de coder, je demande à deux personnes du groupe de revoir mon code, et ensuite si c'est ok je merge sur dev.

7/ Pour merge ma branche sur dev 
    . : je me positionne sur la branche dev 
    .. : j'utilise la commande : git merge profilpage
    