const fs = require("fs");
const express = require("express");

const app = express();

class Contenedor {
    constructor(fileName) {
      this.fileName = fileName;
    }
  
    async getAll() {
      try {
        return fileToArray(this.fileName);
      } catch (error) {
        throw error;
      }
    }
  
    async getRandom() {
      let array = await productos.getAll();
      let randomProd = array[Math.floor(Math.random() * array.length)];
      return randomProd;
    }
  }

let productos = new Contenedor("./products.txt");

app.get("/", async (req, res) => {
  res.send("<h1>Hello!</h1><p>Go to paths /products or /randomProducts to see what happens!</p>");
});

app.get("/products", async (req, res) => {
  let array = await productos.getAll();
  res.send(array);
});

app.get("/productoRandom", async (req, res) => {
  let array = await productos.getAll();
  let randomProd = array[Math.floor(Math.random() * array.length)];
  res.send(randomProd);
});

app.listen(3000, () => {
  console.log(`Escuchando en puerto 3000`);
});

const fileToArray = async (fileName) => {
  try {
    return JSON.parse(await fs.promises.readFile(fileName));
  } catch (error) {
    console.log("Se produjo un error!");
    throw error;
  }
};