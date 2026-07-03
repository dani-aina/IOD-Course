const key = "9nTEQfncwOchdBvkgf7550blObgGMI4HIsSIoLQxqRLctaws";

fetch(
  `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`,
)
  .then((response) => response.json())
  .then((data) => {
    const books = data.results.books;
    const newBooks = books.map(function (book) {
      return {
        title: book.title,
        author: book.author,
        image: book.book_image,
      };
    });
    console.log(newBooks);

    const container = document.getElementById("books-container");
  });
