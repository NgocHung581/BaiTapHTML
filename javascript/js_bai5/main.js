var bookAPI = "https://api.itbook.store/1.0/search/mongodb";
var listBooks = document.querySelector(".list-books");

getBooks = function (callback) {
  fetch(bookAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
};

showBooks = function (element) {
  var books = element.books;
  var newTagLi = "";
  books.forEach((element) => {
    newTagLi += `<li>
        <h2>${element.title}</h2>
        <h3>${element.subtitle}</h3>
        <p>${element.isbn13}</p>
        <p>${element.price}</p>
        <img src="${element.image}" alt="">
        <a href="${element.url}">Link sách</a>
      </li>`;
  });
  listBooks.innerHTML = newTagLi;
};

getBooks(showBooks);
