import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup

  constructor( private router: Router, private storeService: StoreService ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  
  login(event: Event) {
    // console.log('this', this.loginForm)
    if (this.loginForm.valid === false){
      return;
    }
    this.storeService.setName(name);
    this.router.navigate(['/search']);
    event.preventDefault();
  }

}
