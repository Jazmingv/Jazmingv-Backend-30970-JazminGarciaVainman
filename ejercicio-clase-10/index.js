const express = require("express");
const multer  = require('multer');
const container = require("./container.js");

const app = express();
const port = 3000;

//set views & engine. I prefer ejs because it gives me more freedom when coding inside the layout
app.set("views", "./ejs_views");
app.set("view engine", "ejs");

//midlewares
app.use(express.urlencoded({ extended: true }));

const uploads = multer({ dest: 'uploads/' });

app.get("/data", (req, res) => {
    const container = new Container();
    const listadoProductos = container.getAll();
    res.render("data", { listadoProductos });
});

app.post("/form", upload.single('thumbnail'), (req, res) => {
    const { title, author, price } = req.body;
    const { thumbnail } = req.file;
    productsList.push({ title, author, price, thumbnail });
    res.redirect("/data");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});