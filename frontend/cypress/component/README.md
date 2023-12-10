Om ingen styling finns i dessa komponenter när testerna körs via `npx cypress open`. Prova då kör `npm run dev` i frontend mappen. Scriptet finns i package.json och ser ut såhär:

{
...
"test": "concurrently \"tailwindcss -i ./src/index.css -o ./dist/index.css --watch\" \"cypress open\" "
...
}

Det bör dock fungera med att enbart köra `npx cypress open`.
