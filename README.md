# BH2017

Ensemble de scripts qui permettent de récupérer le programme de Benoit HAMON pour 2017 et d'en générer un PDF.


Pré-requis:
* Avoir installé NodeJS et NPM

Procédure pour générer le PDF:

1. Cloner ce repository
2. Aller dans chacun des répertoires "crawler", "web-page" et "rasterize" et lancer à chaque fois la commande `npm install`:
* Aller dans le répertoire "crawler" puis lancer la commande `npm start`
* Se placer dans le répertoire "web-page" et lancer la commande `npm start` (Un serveur web se lance, ne pas le quitter avant la fin de la procédure)
* Se placer dans le répertoire "rasterize" et lancer la commande `npm start`

Ceci devrait produire un fichier programme-bh2017.pdf à la racine du projet.

Enjoy ;-)
