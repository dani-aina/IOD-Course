const key = "9nTEQfncwOchdBvkgf7550blObgGMI4HIsSIoLQxqRLctaws";

fetch(
  `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`,
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
