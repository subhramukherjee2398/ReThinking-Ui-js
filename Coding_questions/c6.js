//  Availability of Books in Store JavaScript

//1. function prototype
//2. class Prototype

/* function Book(title, author, numOfcopies) {
  this.title = title;
  this.author = author;
  this.numOfcopies = numOfcopies;
}

Book.prototype.availability = function () {
  if (this.numOfcopies === 0) {
    return "no stock";
  } else if (this.numOfcopies < 5) {
    return "few stock";
  } else {
    return "no avaible now";
  }
};

Book.prototype.sell = function (books = 1) {
  this.numOfcopies = this.numOfcopies - books;
};

Book.prototype.restock = function (books = 5) {
  this.numOfcopies = this.numOfcopies + books;
}; */

class Book {
  constructor(title, author, numOfcopies) {
    this.title = title;
    this.author = author;
    this.numOfcopies = numOfcopies;
  }

  availability() {
    if (this.numOfcopies === 0) {
      return "no stock";
    } else if (this.numOfcopies < 5) {
      return "few stock";
    } else {
      return "no avaible now";
    }
  }

  sell(books = 1) {
    this.numOfcopies = this.numOfcopies - books;
  }

  restock(books = 5) {
    this.numOfcopies = this.numOfcopies + books;
  }
}

const Dell = new Book("ABC", "kol", 10);

Dell.sell(10);
Dell.restock(7);
Dell.sell(3);
console.log(Dell.availability());
