import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private name: string;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.initName();
  }

  initName(): void {
    this.name = this.storeService.getName();
  }

}
