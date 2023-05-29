import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { VersesComponent } from "./verses/verses.component";
import { BookBuilderComponent } from "./book-builder/book-builder.component";

const routes: Routes = [
    { path: "", redirectTo: "/verses", pathMatch: "full" },
    { path: "books", component: BookListComponent },
    { path: "verses", component: VersesComponent },
    { path: "books/add", component: BookBuilderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
