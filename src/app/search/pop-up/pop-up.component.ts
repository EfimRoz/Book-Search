import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  private formatedAuthors: string;
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    console.log('recived this book:', this.data.book)
    if(this.data.book.volumeInfo.authors) {
      let authors: string = '';
      this.data.book.volumeInfo.authors.forEach(author => {
        authors = authors.concat(`${author}, `);
      });
      authors = authors.substring(0,authors.length -2);// remove astrice and space;
      this.formatedAuthors = authors;
    }
  }

}
