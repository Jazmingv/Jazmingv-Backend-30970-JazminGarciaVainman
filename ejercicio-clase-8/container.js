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

  add(body) {
    let index = 0;
    let newProduct = new Product(body.title, body.author, body.price);

    //check if an empty array
    if (productsList.length == 0) {
      index = 1;
    } else {
      //return ths last index and sum 1 to the new index object
      index = productsList[productsList.length - 1].id + 1;
    }

    newProduct.id = index;
    //add product to products
    productsList.push(newProduct);

    return newProduct;
  }

  update(id, body) {
    productsList.forEach((product) => {
      if (product.id == id) {
        product.title = body.title;
        product.author = body.author;
        product.price = body.price;
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
  constructor(title, author, price) {
    this.title = title;
    this.author = author
    this.price = price;
    this.id = 0;
  }
}

module.exports = Container;