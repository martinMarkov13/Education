class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const book = this.books.find((p) => p.bookName == bookName);
    if (book == undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.payed == true) {
      throw new Error(`${bookName} has already been paid.`);
    }
    book.payed = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (book == undefined) {
      throw new Error("The book, you're looking for, is not found.");
    }

    if (book.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }
    let bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let result = [`The book collection has ${this.capacity - this.books.length} empty spots left.`,];
      let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

      for (const book of sortedBook) {
        let isPayed = "Has Paid";
        if (book.payed == false) {
          isPayed = "Not Paid";
        }
        result.push(`${book.bookName} == ${book.bookAuthor} - ${isPayed}.`);
      }
      return result.join("\n");

    } else {
      let authorData = this.books.find((a) => a.bookAuthor == bookAuthor);
      if (authorData == undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      let isPayed = "Has Paid";
      if (authorData.payed == false) {
        isPayed = "Not Paid";
      }
      return `${authorData.bookName} == ${authorData.bookAuthor} - ${isPayed}.`
    }
  }
}
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
