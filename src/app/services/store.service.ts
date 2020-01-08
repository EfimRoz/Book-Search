import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private name: string;
  private books: string[];

  constructor() {
    this.initVariables();
  }

  private initVariables(): void{
    this.books = [];
  }

  public setName(name: string): void {
    if(name) {
      this.name = `${name}`;
    }
  }
  public getName(): string {
    if(this.name) {
      return `${this.name}`;
    }
    else {
      return '';
    }
  }

  public addBook(volumeId: string): void {
    this.books.push(volumeId);
  }

  public removeBook(volumeId: string): void {
    let index = this.books.findIndex( bookId => bookId === volumeId );
    if(index === -1) {
      return; // no index found
    }
    this.books.splice(index, 1);
  }

}
