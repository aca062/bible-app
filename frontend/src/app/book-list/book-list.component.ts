import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { BookApiService } from "../services/book-api.service";
import { Book } from "../models/Book";

@Component({
    selector: "app-book-list",
    templateUrl: "./book-list.component.html",
    styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
    books: Book[] = [];

    isLoading: Boolean = true;

    constructor(private bookService: BookApiService) {}

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks().subscribe((books) => {
            this.books = books;
        });
    }
}
