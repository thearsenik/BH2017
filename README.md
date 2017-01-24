# BH2017

Ensemble de scripts qui permettent de récupérer de récupérer le programme de Benoit HAMON pour 2017 et d'en générer un PDF.


Pré-requis:
* Avoir installé NodeJS et NPM

Procédure pour générer le PDF:

1. Cloner ce repository
2. Aller dans chacun des répertoires "crawler", "web-page" et "rasterize" et lancer à chaque fois la commande `npm install`
3. Aller dans le répertoire "crawler" puis lancer la commande `npm gen` en regirigeant la sortie dans un fichier "propositions.json"
4. Placer le fichier "propositions.json" généré à l'étape précédente dans le dossier "web-page/www/data/"
5. Se placer dans le répertoire "web-page" et lancer la commande `npm start` (Un serveur web se lance, ne pas le quitter avant la fin de la procédure)
6. Se placer dans le répertoire "rasterize" et lancer la commande `npm gen`

Ceci devrait produire un fichier programme-bh2017.pdf.

Enjoy ;-)
