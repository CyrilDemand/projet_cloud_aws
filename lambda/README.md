# Comment ca marche ?

Un dossier par lambda avec :
- index.ts : le code de la lambda
- package.json : les dépendances de la lambda (aws-sdk)

pour compiler les lambda il faut faire un zip du dossier lambda

en haut du script, liste des lambda à zipper lors du lancement du script
run le powerShell dans le dossier lambda : .\package_lambda.ps1