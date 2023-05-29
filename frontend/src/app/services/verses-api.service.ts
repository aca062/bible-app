import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Verse } from "../models/Verse";

@Injectable({
    providedIn: "root",
})
export class VersesApiService {
    private bibleApiUrl = "https://bible-api.com/";

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    constructor(private http: HttpClient) {}

    bibleBooks: String[] = [
        "Amos",
        "1 Chronicles",
        "2 Chronicles",
        "Daniel",
        "Deuteronomy",
        "Ecclesiastes",
        "Esther",
        "Exodus",
        "Ezekiel",
        "Ezra",
        "Genesis",
        "Habakkuk",
        "Haggai",
        "Hosea",
        "Isaiah",
        "Jeremiah",
        "Job",
        "Joel",
        "Jonah",
        "Joshua",
        "Judges",
        "1 Kings",
        "2 Kings",
        "Lamentations",
        "Leviticus",
        "Malachi",
        "Matthew",
        "Micah",
        "Nahum",
        "Nehemiah",
        "Numbers",
        "Obadiah",
        "Psalms",
        "Proverbs",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "Song of Songs",
        "Zechariah",
        "Zephaniah",
    ];

    getVerse(
        book_name: String,
        chapter: Number,
        verse: Number
    ): Observable<Verse> {
        return this.http
            .get<any>(`${this.bibleApiUrl}/${book_name} ${chapter}:${verse}`)
            .pipe(
                map((response) => {
                    return response.verses[0];
                })
            );
    }
}
