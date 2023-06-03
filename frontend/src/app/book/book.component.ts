import { Component, Input } from "@angular/core";
import { Book } from "../models/Book";

@Component({
    selector: "app-book",
    templateUrl: "./book.component.html",
    styleUrls: ["./book.component.scss"],
})
export class BookComponent {
    @Input() book!: Book;

    previewVerses!: number[];

    ngOnInit(): void {
        if (this.book.verses.length >= 3) {
            this.previewVerses = Array(3)
                .fill(0)
                .map((x, i) => i);
        } else {
            this.previewVerses = Array(this.book.verses.length)
                .fill(0)
                .map((x, i) => i);
        }
    }
}
