const addBookButton = document.querySelector('.addBookButton');
const removeBookButton = document.querySelector('.removeBookButton');
const booksContainer = document.querySelector('.booksContainer');

const modal = document.querySelector('.modal');
const errorMessage = document.querySelector('.error')
const closeButton = document.querySelector('.closeButton');

// Modal inputs
const titleField = document.querySelector('#titleInput');
const authorField = document.querySelector('#authorInput');
const numPagesField = document.querySelector('#numPagesInput');
const readField = document.querySelector('#readInput');

let deleteState = false;

class Library {
    // initialize buttons
    constructor() {
        addBookButton.addEventListener('click', () => {
            deleteState = false;
            this.displayLibrary();
            modal.showModal();
        });
        
        removeBookButton.addEventListener('click', () => {
            this.removeBookFromLibrary();
        });
        
        closeButton.addEventListener('click', (event) => {
            if(titleField.value == "") {
                errorMessage.innerHTML = "*Title field is empty";
                event.preventDefault();
            } else if(authorField.value == ""){
                errorMessage.innerHTML = "*Author field is empty";
                event.preventDefault();
            } else if(numPagesField.value == "") {
                errorMessage.innerHTML = "*Number of pages field is empty";
                event.preventDefault();
            } else if(this.myLibrary.some(book => book.title == titleField.value)) { // search existing books for title
                errorMessage.innerHTML = "*Book already exists in library";
                event.preventDefault();
            } else {
                this.addBookToLibrary();
                modal.close();
                this.clearModal();
            }
        });
    }

    myLibrary = [];
    bookIndex = 0;

    // grab user info and add to library array
    addBookToLibrary() {
        let newBook = new Book(titleField.value, authorField.value, numPagesField.value, readField.checked, this.bookIndex);

        this.myLibrary.push(newBook);
        this.bookIndex++;
        this.displayLibrary();   // display all books in library array
        this.addReadButtons()    // add read toggling functionality to all books displayed
    }

    // displays all library info
    displayLibrary() {
        booksContainer.innerHTML = "";
        this.myLibrary.forEach((currentBook) => {
            booksContainer.innerHTML += `<div class="bookCard" id="${currentBook.index}">
                                            <div class="bookTitle">
                                                <div class="field">Title: </div>
                                                <div class="value">${currentBook.title}</div>
                                            </div>
                                            <div class="bookAuthor">
                                                <div class="field">Author: </div>
                                                <div class="value">${currentBook.author}</div>
                                            </div>
                                            <div class="bookNumPages">
                                                <div class="field">Number of Pages: </div>
                                                <div class="value">${currentBook.numberOfPages}</div>
                                            </div>
                                            <div class="bookRead" id="${(currentBook.read) ? 'read' : 'notRead'}">${(currentBook.read) ? 'Read' : 'Not Read'}</div>
                                        </div>`;
        })
    }

    // add toggling functionality to book read buttons
    addReadButtons() {
        const bookReadButtons = document.querySelectorAll('.bookRead');
        bookReadButtons.forEach((bookButton) => {
            bookButton.addEventListener('click', () => {
                // edit DOM of displayed books
                if(bookButton.id == 'notRead') {
                    bookButton.id = 'read';
                    bookButton.innerHTML = 'Read';
                } else {
                    bookButton.id = 'notRead';
                    bookButton.innerHTML = 'Not Read';
                }

                // edit selected books read property in library array
                // find selected book
                console.log(this);
                let targetBook = this.myLibrary.find(bookObject => 
                    bookObject.index == Number(bookButton.parentElement.id));
                // flip read property
                targetBook.read ? targetBook.read = false : targetBook.read = true;
            });
        })
    }

    // delete selected book from library
    removeBookFromLibrary() {
        if (deleteState == false) {
            deleteState = true;
            const bookCards = document.querySelectorAll('.bookCard');

            bookCards.forEach((bookCard) => {
                bookCard.style.cursor = `url('../images/deleteCursorIcon.png'), auto`;
                bookCard.addEventListener('click', () => {
                    // edit selected books read propety in library array
                    // find selected book
                    let targetBook = this.myLibrary.find(bookObject => 
                        bookObject.index == Number(bookCard.id));
        
                    // delete selected book from library array
                    this.myLibrary.forEach((currentBook, index) => {
                        if (currentBook.index == targetBook.index) {
                            this.myLibrary.splice(index, 1);
                        }
                    });
                    deleteState = false;
                    this.displayLibrary();
                });
            });
        } else {
            deleteState = false;
            this.displayLibrary()
        }
    }

    // remove data from modal
    clearModal() {
        titleField.value = "";
        authorField.value = "";
        numPagesField.value = "";
        readField.checked = false;
    }
}

class Book {
    constructor(title, author, numberOfPages, read, bookIndex) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
        this.index = bookIndex;
    }

    info() {
        return `Author: ${this.author}, Title: ${this.title}, Total Pages: ${this.numberOfPages}, Read: ${this.read}, Index: ${this.index}`;
    }
}

let library = new Library();