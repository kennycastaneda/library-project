function getBookPopularity(books){ //helper for getMostPopularAuthors function
  let booksAuthorNameAndCount = books.map((book) => {
    let borrowed = book.borrows;
    let count = borrowed.length;
    return {'authorId':book.authorId, 'count':count};
  })
  /*let booksNameAndCount = [];//set up array for books and count object
  
  for (let book of books){ //iterate through the books array objects
    let borrowed = book.borrows; //pull out the array of borrows
    let count = borrowed.length; //get the number of times it's been borrowed;
    let bookNameAndCount = {'name':book.title, 'authorId':book.authorId,'count':count};//create object of the book title, authorId, and count
    booksNameAndCount.push(bookNameAndCount);//add to the array of all the books
  }*/
  return booksAuthorNameAndCount;
}

function totalBooksCount(books) {
  return books.length;//return length of the array
}

function totalAccountsCount(accounts) {
  return accounts.length;//return length of the array
}

function booksBorrowedCount(books) {
  let borrowedBooks = [];//set up array for borrowed books
    for (let book of books){ //iterate through the books array objects
      let borrowed = book.borrows; //pull out the array of borrows
      if (borrowed.some((borrow) => borrow.returned === false)) borrowedBooks.push(book);//returns true if the book is checked out and pushes that book to the array borrowedBooks
    }
  return borrowedBooks.length; //return the length which indicated the numbers of books borrowed
}

function getMostCommonGenres(books) {
  let genresFilter = []; //initiate a list of all the genres, non-repeating
  let genres = []; //initiate a list of all the genres found
  let genreCounts = []; //initiate a list of the counts of the unique genres

  for (let book of books){//iterate through each book
    let genre = book.genre;//take out the genre value
    if (!genres.includes(genre)) { //compare to see if the list of genres looked at so far has been seen before
      genresFilter.push(genre); //push the unique genre since it hasn't been seen before
    }
    genres.push(genre); //push the genre name into the array of genres found/seen so far
  }

  for(let genre of genresFilter){//iterate through each unique genre
    let countGenre = genres.filter(match => match === genre);//pull out all the times the unique genre is in the array of seen genres
    let genreObj = {"name":genre, "count":countGenre.length}; //create an object with keys name and count, assign the unique genre to name and assign count to the length of the array of the same seen genre
    genreCounts.push(genreObj);//add object to the array of genres

  }
  genreCounts.sort((genreA, genreB) => { //sort the genres based off of most popular, i.e. higher counts
    return genreB.count - genreA.count
  });
  return genreCounts.slice(0,5); //reduce the array sice to the first/top 5
}

function getMostPopularBooks(books) {
  let booksNameAndCount = [];//set up array for books and count object
  for (let book of books){ //iterate through the books array objects
    let borrowed = book.borrows; //pull out the array of borrows
    let count = borrowed.length;
    let bookNameAndCount = {'name':book.title, 'count':count};
    booksNameAndCount.push(bookNameAndCount);
  }
  booksNameAndCount.sort((bookA,bookB)=>bookB.count-bookA.count);
  return booksNameAndCount.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let bookPopularity = getBookPopularity(books); //use helper function to get books' popularity (name, authorId,and count)
  let authorPopularity = []; //initiate an array to collect the authors' popularity (name, count)

  authorPopularity = authors.map((author)=>{//go through the list of authors
    let booksByAuthor = bookPopularity.filter((bookAuthor) => bookAuthor.authorId === author.id); // find books of the author
    let totalCount = booksByAuthor.reduce((total, bookByAuthor) => total + bookByAuthor.count);//not sure why this doens't return a number
    authorBookCount = {'name':`${author.name.first} ${author.name.last}`, 'count':totalCount.count};//create the object of the author with their total count from their books
    return authorBookCount;//push the object to the array of authors 
  });
  authorPopularity.sort((authorA={},authorB={})=>authorB.count-authorA.count);//some authors don't have books listed in books data, sort by their count/popularity
  return authorPopularity.slice(0,5); // only give the top five
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};