import { Component, Input } from "@angular/core";
import { BookApiService } from "../services/book-api.service";
import { VersesApiService } from "../services/verses-api.service";
import { catchError } from "rxjs";
import { Verse } from "../models/Verse";
import { Book } from "../models/Book";
import { ActivatedRoute, Router } from "@angular/router";
import { isEqual, pick } from "lodash-es";

@Component({
    selector: "app-book-builder",
    templateUrl: "./book-builder.component.html",
    styleUrls: ["./book-builder.component.scss"],
})
export class BookBuilderComponent {
    bookName: String = "";

    bookVerses: Verse[] = [];

    bibleBook: String = "";
    chapterNumber: Number = 1;
    verseNumber: Number = 1;
    selectedVerse!: Verse;

    correctVerse: Boolean = false;

    edit: Boolean = false;
    loading: Boolean = true;
    originalBookName?: String;
    id?: Number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private versesApi: VersesApiService,
        private bookApi: BookApiService
    ) {}

    bibleBooks: String[] = [];

    async ngOnInit() {
        this.bibleBooks = this.versesApi.bibleBooks;
        const bookId = parseInt(
            String(this.route.snapshot.paramMap.get("bookId"))
        );
        if (bookId) {
            await this.bookApi.getBook(bookId).subscribe((result) => {
                this.edit = true;
                this.id = result.id;
                this.bookName = result.name;
                this.originalBookName = result.name;
                this.bookVerses = result.verses;
                this.loading = false;
            });
        } else {
            this.loading = false;
        }
    }

    getVerse() {
        this.versesApi
            .getVerse(this.bibleBook, this.chapterNumber, this.verseNumber)
            .subscribe({
                next: (response) => {
                    this.selectedVerse = response;
                    this.correctVerse = true;
                },
                error: () => {
                    this.correctVerse = false;
                },
            });
    }

    addVerse() {
        const commonFields = ["book_name", "chapter", "text", "verse"];
        const verseExists = this.bookVerses.find((verse) =>
            isEqual(
                pick(verse, commonFields),
                pick(this.selectedVerse, commonFields)
            )
        );
        if (!verseExists) {
            this.bookVerses.push(this.selectedVerse);
        } else {
            alert("That verse has already been added to the book");
        }
    }

    createBook() {
        this.bookApi
            .addBook({
                name: this.bookName,
                verses: this.bookVerses,
            } as Book)
            .subscribe((response) => {
                const addedBook = response;
                this.router.navigate([`/books/${addedBook.id}`]);
            });
    }

    editBook() {
        this.bookApi
            .editBook(
                {
                    name: this.bookName,
                    verses: this.bookVerses,
                } as Book,
                this.id!
            )
            .subscribe((response) => {
                const addedBook = response;
                this.router.navigate([`/books/${addedBook.id}`]);
            });
    }

    deleteVerse(id: number) {
        if (id === 0) {
            this.bookVerses.shift();
        } else {
            this.bookVerses.splice(id, id);
        }
    }
}
