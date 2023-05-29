import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, map } from "rxjs";
import { Book } from "../models/Book";

@Injectable({
    providedIn: "root",
})
export class BookApiService {
    private bookUrl = "http://localhost:8080/api/books";

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]> {
        return this.http.get<any>(this.bookUrl).pipe(
            map((response) => {
                return response._embedded.books;
            })
        );
    }
}
