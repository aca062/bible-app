import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ImageScrapping } from "../models/ImageScrapping";

@Injectable({
    providedIn: "root",
})
export class ScrapperService {
    private scrapperUrl = "http://localhost:8080/api/image/data";

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private http: HttpClient) {}

    public getImagePath(): Observable<ImageScrapping> {
        return this.http.get<ImageScrapping>(this.scrapperUrl);
    }
}
