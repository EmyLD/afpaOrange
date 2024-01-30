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