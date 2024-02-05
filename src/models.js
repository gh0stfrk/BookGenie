// BookModel.js

class Book {
    constructor(bookName, authorName, reason, coverPhoto, amazonLink, googleBooksLink) {
      this.bookName = bookName;
      this.authorName = authorName;
      this.reason = reason;
      this.coverPhoto = coverPhoto;
      this.amazonLink = amazonLink;
      this.googleBooksLink = googleBooksLink;
    }
  }
  
  export default Book;
  