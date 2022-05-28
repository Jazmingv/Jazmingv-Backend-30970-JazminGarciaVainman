let productsList = [];

class Container {
  getAll() {
    return productsList;
  }

  getByID(id) {
    const productByID = productsList.filter((product) => {
      return product.id == id;
    });
    return productByID;
  }

  add(props) {
    let index = 1;
    if (productsList.length != 0) {
      index = productsList[productsList.length - 1].id + 1;
    }
    newProduct.id = index;
    let newProduct = new Product(props.title, props.author, props.price, index);
    productsList.push(newProduct);

    return newProduct;
  }

  update(id, props) {
    productsList.forEach((product) => {
      if (product.id == id) {
        product.title = props.title;
        product.author = props.author;
        product.price = props.price;
      }
    });
    return productsList.filter((product) => {
      return product.id == id;
    });
  }

  delete(id) {
    return productsList.splice(id - 1, 1);
  }
}

class Product {
  constructor(title, author, price, id) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.id = id;
  }
}

module.exports = Container;