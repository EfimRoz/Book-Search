import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private name: string;
  private bookForm: FormGroup;
  private books: any;

  constructor(
    private storeService: StoreService, 
    private searchService: SearchService,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.initName();
    this.initForm();
  }

  private initName(): void {
    this.name = this.storeService.getName();
  }

  private initForm(): void {
    this.bookForm = new FormGroup({
      bookName: new FormControl('', [Validators.required]),
    });
  }

  private search(event: Event): void {
    const bookName = this.bookForm.controls.bookName.value;
    const booksSub = this.searchService.getBooks(bookName);
    const subscribtion = booksSub.subscribe((books) => {
      this.books = books;
      subscribtion.unsubscribe();
    });
    event.preventDefault();
  }

  private showMore(book: any): void {
    console.log('open pop-up')
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '50%',
      height: "70%",
      data: {book: book}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
