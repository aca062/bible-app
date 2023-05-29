import { Component, Inject } from "@angular/core";
import { BookApiService } from "../services/book-api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { VersesApiService } from "../services/verses-api.service";
import { Book } from "../models/Book";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogModule,
} from "@angular/material/dialog";

export interface DialogData {
    name: string;
    id: number;
}

@Component({
    selector: "app-book-detail",
    templateUrl: "./book-detail.component.html",
    styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent {
    book!: Book;

    loading: Boolean = true;

    constructor(
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private bookApi: BookApiService
    ) {}

    ngOnInit(): void {
        const bookId = parseInt(
            String(this.route.snapshot.paramMap.get("bookId"))
        );

        this.bookApi.getBook(bookId).subscribe((result) => {
            this.book = result;
            this.loading = false;
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.book.name, id: this.book.id },
        });
    }
}

@Component({
    selector: "book-detail-delete-dialog",
    templateUrl: "book-detail-delete-dialog.html",
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
    ],
})
export class DialogOverviewExampleDialog {
    constructor(
        private bookApi: BookApiService,
        private router: Router,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    deleteBook() {
        this.bookApi.deleteBook(this.data.id).subscribe((response) => {
            const deletedBook = response;
            this.dialogRef.close();
            this.router.navigate([`/books`]);
        });
    }
}
