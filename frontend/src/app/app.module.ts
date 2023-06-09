import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BookComponent } from "./book/book.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { VersesComponent } from "./verses/verses.component";
import { BookListComponent } from "./book-list/book-list.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    FormsModule,
    ReactiveFormsModule,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NgIf } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { NgFor } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { provideAnimations } from "@angular/platform-browser/animations";
import { BookBuilderComponent } from "./book-builder/book-builder.component";
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogModule,
} from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BookDetailComponent,
        VersesComponent,
        BookListComponent,
        BookBuilderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatAutocompleteModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        NgIf,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        NgFor,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
    ],
    providers: [provideAnimations()],
    bootstrap: [AppComponent],
})
export class AppModule {}
