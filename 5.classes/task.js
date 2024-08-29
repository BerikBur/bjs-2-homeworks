class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    
    fix() {
        this.state = this._state * 1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this._state = 0;
        } else if(newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundedBook;
        function callback(element) {
            if(element[type] === value) {
                foundedBook = element;                
            } else {
                foundedBook = null;
            }
        } 
        
        this.books.forEach(callback);
        return foundedBook;
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(book => book.name === bookName);
        if(bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark < 2 || mark > 5) {
            return;
        }
        if(!this.marks[subject]) {
            this.marks[subject] = []; 
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if(!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }
        let sum = this.marks[subject].reduce((sum, mark) => sum + mark);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        let marksObjectKeys = Object.keys(this.marks);
        if(marksObjectKeys.length === 0) {
            return 0;
        }
        let allAverage = marksObjectKeys.reduce((allAverage, key) => allAverage + this.getAverageBySubject(key), 0);
        return allAverage / marksObjectKeys.length;
    }
}
