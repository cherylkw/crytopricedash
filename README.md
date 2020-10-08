# Cryptocurrency Dashboard

## Welcome to Crypto Price Dashboard

**Crypto Price Dashboard** is a simple dashboard to show crytocurrency price today. The prices are using API GET request to retrieve from CoinGecko so it is the most update at the moment you visit the page.

## Live Demo

https://obscure-island-61654.herokuapp.com/

## App architecture

UI : Bootstrap
Backend : Node.js, Next.js
API request and JSON response : CoinGecko

## Setting up the development environment

-  Install Node.js
-  Install Next.js : npm install -g create-next-app
-  Config App folder : create-next-app <foldername>
-  Start local server : npm run dev
-  Open the localhost http://localhost:8000/ to run the app
-  Install CoinGecko API : npm install coingecko-api

## Deploy on Heroku using Heroku-cli

1. Create a Heroku account
2. Install Heroku-cli
3. Install Git
4. Create repository in Git
    - git init
    - git add -A
    - git commit -m "init"
5. Login in Heroku : heroku login
6. Create App : heroku create
7. Upload project to heroku : git push heroku master

## Author : Cheryl Kwong  Email : cherylkwong@gmail.com
## Project developed by : Node.js, Next.js, CoinGecko, Heroku, Bootstrap
