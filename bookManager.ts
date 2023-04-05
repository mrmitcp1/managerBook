import {Book} from "./book";

export class BookManager {
    books:Book[]=[]
    constructor() {
    }
    add(book:Book):void{
    this.books.push(book)
    }
    getList(): Book[] {
    return this.books
    }
    findBook(ID :string){
        // @ts-ignore
        return this.books.find((book)=>book.ID===ID)
    }
    delete(ID:string):void{
       this.books = this.books.filter((book)=>book.ID!==ID)
    }
    update(ID:string, newName:string){
        let book = this.findBook(ID);
        if (book){
            book.name = newName;
        }
    }
}