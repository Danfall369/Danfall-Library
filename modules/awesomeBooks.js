// eslint-disable-next-line import/prefer-default-export
export class AwesomeBooks {
  constructor() {
    this.books = [];
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('addBtn');
    this.bookList = document.getElementById('bookList');

    this.displayBooks();

    this.addBtn.addEventListener('click', () => {
      this.addBook();
    });

    this.bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('removeBtn')) {
        const bIndex = event.target.dataset.bookIndex;
        this.removeBook(bIndex);
      }
    });
  }

    displayBooks = () => {
      this.bookList.innerHTML = '';
      this.books.forEach((book, index) => {
        const li = document.createElement('li');
        li.classList.add('listStyle');
        li.innerHTML = `"${book.title}" by ${book.author}`;
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.setAttribute('data-book-index', index);
        removeBtn.innerText = 'Remove';
        li.appendChild(removeBtn);
        this.bookList.appendChild(li);
      });
    };

    addBook = () => {
      if (this.titleInput.value && this.authorInput.value) {
        const book = {
          title: this.titleInput.value,
          author: this.authorInput.value,
        };
        this.books.push(book);
        this.displayBooks();
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    };

    removeBook = (index) => {
      this.books.splice(index, 1);
      this.displayBooks();
    };
}
