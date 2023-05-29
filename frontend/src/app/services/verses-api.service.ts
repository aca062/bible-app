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

    getVerse(
        book_name: String,
        chapter: Number,
        verse: Number
    ): Observable<Verse> {
        return this.http
            .get<any>(
                this.bibleApiUrl + book_name + " " + chapter + ":" + verse
            )
            .pipe(
                map((response) => {
                    return response.verses[0];
                })
            );
    }
}
