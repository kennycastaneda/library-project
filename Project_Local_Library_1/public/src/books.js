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
      (borrowed.some((borrow) => borrow.returned === false)) ? borrowedBooks.push(book) : returnedBooks.push(book);//returs true if book is checked out and moved the book into appropriate list depending on true/false
    }
  return [borrowedBooks, returnedBooks];//returns the two arrays
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;//set the array for handling later
  let borrowersForBook = [];//initiate the array to hold the borrowers
  for(let borrow of borrows){ //go through the borrows list book by book
    let accountBorrow = accounts.find((account) => account.id === borrow.id);// if the user is found in the list, get the account info
    accountBorrow["returned"]=borrow.returned;//create object key and value
    borrowersForBook.push(accountBorrow);//add the object to the borrowers info for the book
    if (borrowersForBook.length === 10 ) break;//break if list exceed 10
  }
  return borrowersForBook;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
