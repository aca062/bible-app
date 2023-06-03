import { Component } from "@angular/core";
import { Verse } from "../models/Verse";
import { VersesApiService } from "../services/verses-api.service";
import { ScrapperService } from "../services/scrapper.service";
import { ImageScrapping } from "../models/ImageScrapping";

@Component({
    selector: "app-verses",
    templateUrl: "./verses.component.html",
    styleUrls: ["./verses.component.scss"],
})
export class VersesComponent {
    bibleBook: String = "";
    chapterNumber: Number = 1;
    verseNumber: Number = 1;

    correctVerse: Boolean = false;

    selectedVerse!: Verse;

    imagePath!: String;

    constructor(
        private versesApi: VersesApiService,
        private imageService: ScrapperService
    ) {}

    bibleBooks: String[] = [];

    ngOnInit() {
        this.bibleBooks = this.versesApi.bibleBooks;
        this.getImage();
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

    getImage() {
        this.imageService.getImagePath().subscribe({
            next: (response) => {
                this.imagePath = response.path;
            },
        });
    }
}
