//importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();
server;
//utilizando os arquivos estaticos
server
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // criar uma rota
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanages", pages.createOrphanages);

//ligar o servidor
server.listen(5500);