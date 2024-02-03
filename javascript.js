const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read === true) {
            // message = title + " by " + author + ", " + pages + " pages, already read."
            message = "Already read";
        }
        else {
            // message = title + " by " + author + ", " + pages + " pages, not read yet."
            message = "Not read yet";
        }
        return message;
    }
}

function showBooks() {
    let gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('id', `${myLibrary[i].title}`);
        book.innerHTML += `<span>Title: ${myLibrary[i].title}<span>`;
        book.innerHTML += `<span>Author: ${myLibrary[i].author}<span>`;
        book.innerHTML += `<span>Pages: ${myLibrary[i].pages}<span>`;
        book.innerHTML += `<span class="book-read">Read: ${myLibrary[i].info()}<span>`;
        book.innerHTML += `<button class="remove-book">REMOVE</button>`;
        book.innerHTML += `<button class="read-button">READ</button>`;
        gridContainer.appendChild(book);
    }
}

const newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', () => {
    document.getElementById('book-form').style.display = 'block';
});

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showBooks();
    document.getElementById('book-form').style.display = 'none';
});

const removeBookButton = document.querySelectorAll('.remove-book');
removeBookButton.forEach(btn => {
    btn.onclick = function() {
        btn.parentElement.remove();
    }
});

const readButton = document.querySelectorAll('.read-button');
readButton.forEach(btn => {
    btn.onclick = function() {
        let title = btn.parentElement.getAttribute('id');
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title === title) {
                if (myLibrary[i].read === true) {
                    myLibrary[i].read = false;
                }
                else {
                    myLibrary[i].read = true;
                }
                let bookReadSpan = btn.parentElement.querySelector('.book-read');
                bookReadSpan.textContent = `Read: ${myLibrary[i].info()}`;
            }
        }
    }
});