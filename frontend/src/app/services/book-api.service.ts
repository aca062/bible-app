import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, map, tap } from "rxjs";
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

    addBook(book: Book): Observable<Book> {
        return this.http.post<any>(this.bookUrl, book);
    }

    editBook(book: Book, id: Number): Observable<Book> {
        return this.http.put<any>(`${this.bookUrl}/${id}`, book);
    }

    deleteBook(id: number): Observable<Book> {
        return this.http.delete<any>(`${this.bookUrl}/${id}`);
    }

    getBook(id: Number): Observable<Book> {
        return this.http.get<any>(`${this.bookUrl}/${id}`);
    }
}
