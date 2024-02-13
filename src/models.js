// BookModel.js

class Book {
    constructor(bookName, authorName, reason, coverPhoto, isbn, googleBooksLink, pageCount, categories) {
      this.bookName = bookName;
      this.authorName = authorName;
      this.reason = reason;
      this.coverPhoto = coverPhoto;
      this.isbn = isbn;
      this.googleBooksLink = googleBooksLink;
      this.pageCount = pageCount;
      this.categories = categories;

    }
  }
  
  export default Book;
  