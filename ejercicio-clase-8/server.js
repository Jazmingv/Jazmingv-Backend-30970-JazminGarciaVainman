const express = require("express");

const app = express();
const port = 3000;
const router = express.Router();

const container = require("./container.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", router);
app.use('/',express.static("public"));

const server = app.listen(port, () => {
  console.log("Servidor ON!");
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));

router.get("/", (req, res) => {
  const container = new Container();
  const listadoProductos = container.getAll();
  res.send({ productos: listadoProductos });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const container = new Container();
  const productByID = container.getByID(id);
  if (productByID[0] != undefined) {
    res.send({ producto: productByID });
  } else res.status(404).send({ error: "Producto no encontrado" });
});

router.post("/", (req, res) => {
  const container = new Container();
  const product = req.body;
  const newProduct = container.add(product);
  res.send({ producto: newProduct });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = req.body;
  const container = new Container();
  const putProduct = container.update(id, product);
  if (putProduct[0] != undefined) {
    res.send({ producto: putProduct });
  } else res.status(404).send({ error: "Producto no encontrado" });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const container = new Container();
  const deleteProduct = container.delete(id);
  if (deleteProduct[0] != undefined) {
    res.status(200).send({ mensaje: "producto eliminado" });
  } else res.status(404).send({ error: "Producto no encontrado" });
});
