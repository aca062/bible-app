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
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy",
        "Joshua",
        "Judges",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "1 Kings",
        "2 Kings",
        "1 Chronicles",
        "2 Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther",
        "Job",
        "Psalms",
        "Proverbs",
        "Ecclesiastes",
        "Song of Songs",
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi",
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
