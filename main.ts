import {Book} from "./book";
import {BookManager} from "./bookManager";

let book1=new Book('h12','ca heo')
let book2=new Book('h13','ca voi')
let book3=new Book('h14','ca chim')
let bookManager = new BookManager()
bookManager.add(book1)
bookManager.add(book2)
bookManager.add(book3)
bookManager.update('h13','ca lol')
console.log(bookManager.getList())