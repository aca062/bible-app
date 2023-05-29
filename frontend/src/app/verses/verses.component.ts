import { Component } from "@angular/core";
import { Verse } from "../models/Verse";
import { VersesApiService } from "../services/verses-api.service";

@Component({
    selector: "app-verses",
    templateUrl: "./verses.component.html",
    styleUrls: ["./verses.component.scss"],
})
export class VersesComponent {
    bibleBook: String = "";
    chapterNumber: Number = 0;
    verseNumber: Number = 0;

    correctVerse: Boolean = false;

    selectedVerse!: Verse;

    constructor(private versesApi: VersesApiService) {}

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
}
