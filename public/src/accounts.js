function accountId (account){
  const accountId = account.id;
  return accountId;
}
function newBookAuthor(book = {}, authors = []){ //creates a new object with author inserted into book object
  const id = book.authorId; //get the author id from the book
  let foundAuthor = authors.find((author) => author["id"] === id); //if author id is found in authors, return author object
  book["author"] = foundAuthor; //add author key with foundAuthor value
  return book;//return the book that now has new author key

}

function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);//gives the account value with key id found
  return result;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA,accountB) => (accountA.name.last > accountB.name.last ? 1 : -1)); //sorts by comparing last names in each object by pairs
  return accounts;
}

function numberOfBorrows(account, books) {
  const accId = (accountId(account)); //make a const value of account ID
  //console.log(accountId)
  let count = 0; //initiate counter for result to return
  for (book of books){ //iterate through each book
    let borrowed = book.borrows; //pull out the array of borrows
    //console.log(borrowed);
    for (borrowId of borrowed){ //iterate through each id found in borrows of each book
      if (borrowId.id === accId) count += 1; //add to counter if there is a match
    }
  }
  return count; //return the total matches
}

function getBooksPossessedByAccount(account, books, authors) {
  const accId = (accountId(account)); //get accId using helper function
  let bookAuthor = []; //set up array for book objects with author object inside
  for (book of books){ //iterate through the books array objects
    let borrowed = book.borrows; //pull out the array of borrows
    for (borrowId of borrowed){ //iterate through the borrowed objects
      if(borrowId.id === accId){ //see if the account is in the borrows
        if(!borrowId.returned) { //if it is and the book is not returned 
          let pushBookAuthor = newBookAuthor(book,authors); //helper function to bring in author into array
          bookAuthor.push(pushBookAuthor); //insert array with book object that has author object inserted
        }
      }
    }
  }
  return bookAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
