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

addBookButton.addEventListener('click', () => {
    deleteState = false;
    displayLibrary();
    modal.showModal();
});

removeBookButton.addEventListener('click', removeBookFromLibrary);

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
    } else if(myLibrary.some(book => book.title == titleField.value)) { // search existing books for title
        errorMessage.innerHTML = "*Book already exists in library";
        event.preventDefault();
    } else {
        addBookToLibrary();
        modal.close();
        clearModal();
    }
});

function clearModal() {
    titleField.value = "";
    authorField.value = "";
    numPagesField.value = "";
    readField.checked = false;
}

// array of book objects
let myLibrary = [];

let bookIndex = 0;

// constructor for book object
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.index = bookIndex;

    this.info = function() {
        return `Author: ${this.author}, Title: ${this.title}, Total Pages: ${this.numberOfPages}, Read: ${this.read}, Index: ${this.index}`;
    }
}

// grab user info and add to library array
function addBookToLibrary() {
    let newBook = new Book(titleField.value, authorField.value, numPagesField.value, readField.checked);

    myLibrary.push(newBook);
    bookIndex++;
    displayLibrary();   // display all books in library array
    addReadButtons()    // add read toggling functionality to all books displayed
}

// displays all library info
function displayLibrary() {
    booksContainer.innerHTML = "";
    myLibrary.forEach((currentBook) => {
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

function addReadButtons() {
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
            let targetBook = myLibrary.find(bookObject => 
                bookObject.index == Number(bookButton.parentElement.id));
            // flip read property
            targetBook.read ? targetBook.read = false : targetBook.read = true;
        });
    })
}

// delete selected book from library
function removeBookFromLibrary() {
    if (deleteState == false) {
        deleteState = true;
        const bookCards = document.querySelectorAll('.bookCard');

        bookCards.forEach((bookCard) => {
            bookCard.style.cursor = `url('../images/deleteCursorIcon.png'), auto`;
            bookCard.addEventListener('click', () => {
                // edit selected books read propety in library array
                // find selected book
                let targetBook = myLibrary.find(bookObject => 
                    bookObject.index == Number(bookCard.id));
    
                // delete selected book from library array
                myLibrary.forEach((currentBook, index) => {
                    if (currentBook.index == targetBook.index) {
                        myLibrary.splice(index, 1);
                    }
                });
                deleteState = false;
                displayLibrary();
            });
        });
    } else {
        deleteState = false;
        displayLibrary()
    }
}