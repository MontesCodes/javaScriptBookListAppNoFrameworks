'use strict';
// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: '3434434',
      },
      {
        title: 'Book Two',
        author: 'John Doe',
        isbn: '5434435',
      },
    ];

    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles Storage

// Even: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Even: Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instatiate book
  const book = new Book(title, author, isbn);

  // console.log(book);
  // Add book to UI
  UI.addBookToList(book);

  // Clear Fields
  UI.clearFields();
});

// Even: Remove a Book
