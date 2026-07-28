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
    const template = document.getElementById("book-template");

    const newCards = newBooks.map(function (book) {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".book-title").innerText = book.title;
      clone.querySelector(".book-author").innerText = book.author;
      clone.querySelector(".book-image").src = book.image;
      clone.querySelector(".book-image").alt = book.title;
      return clone;
    });
    container.append(...newCards);
  });
