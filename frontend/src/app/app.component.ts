import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "Bible App";

    activeLink: string | null = null;

    options: String[] = ["hola", "que tal"];
    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.activeLink = this.router.url.replace("/", "");
            }
        });
    }

    setActiveLink(link: string): void {
        this.activeLink = link;
    }
}
