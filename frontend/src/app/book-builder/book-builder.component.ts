import { Component } from "@angular/core";
import { BookApiService } from "../services/book-api.service";
import { VersesApiService } from "../services/verses-api.service";
import { catchError } from "rxjs";
import { Verse } from "../models/Verse";
import { Book } from "../models/Book";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-book-builder",
    templateUrl: "./book-builder.component.html",
    styleUrls: ["./book-builder.component.scss"],
})
export class BookBuilderComponent {
    bookName: String = "";

    bookVerses: Verse[] = [];

    bibleBook: String = "";
    chapterNumber: Number = 0;
    verseNumber: Number = 0;
    selectedVerse!: Verse;

    correctVerse: Boolean = false;

    constructor(
        private router: Router,
        private versesApi: VersesApiService,
        private bookApi: BookApiService
    ) {}

    bibleBooks: String[] = [];

    ngOnInit() {
        this.bibleBooks = this.versesApi.bibleBooks;
    }

    getVerse() {
        this.versesApi
            .getVerse(this.bibleBook, this.chapterNumber, this.verseNumber)
            .subscribe({
                next: (response) => {
                    this.selectedVerse = response;
                    this.correctVerse = true;
                },
                error: (error) => {
                    this.correctVerse = false;
                },
            });
    }

    addVerse() {
        this.bookVerses.push(this.selectedVerse);
    }

    createBook() {
        this.bookApi
            .addBook({
                name: this.bookName,
                verses: this.bookVerses,
            } as Book)
            .subscribe((response) => {
                const addedBook = response;
                this.router.navigate([`/books/${addedBook.id}/details`]);
            });
    }
}
