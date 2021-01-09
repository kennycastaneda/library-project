function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author["id"] === id); //if author id is found in authors, return author object
  return foundAuthor;//return the author object
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook; //return the book object
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = [];//set up array for borrowed books
  let returnedBooks = [];//set up array for returned books
    for (let book of books){ //iterate through the books array objects
      let borrowed = book.borrows; //pull out the array of borrows
      (borrowed.some((borrow) => borrow.returned === false)) ? borrowedBooks.push(book) : returnedBooks.push(book);
    }
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  console.log (borrows);
  let borrowersForBook = [];
  for(let borrow of borrows){
    let accountBorrow = accounts.find((account) => account.id === borrow.id);
    accountBorrow["returned"]=borrow.returned;
    borrowersForBook.push(accountBorrow);
    if (borrowersForBook.length === 10 ) break;
  }
  return borrowersForBook;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
