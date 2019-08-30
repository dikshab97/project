import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {ActivatedRoute, Router}from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  onElecButtonClick():void{
    this.router.navigate(['/electrician']);
  }
  onCarButtonClick():void{
    this.router.navigate(['/carpenter']);
  }
  onPluButtonClick():void{
    this.router.navigate(['/plumber']);
  }
  onMpButtonClick():void{
    this.router.navigate(['/moverpacker']);
  }
  onSarButtonClick():void{
    this.router.navigate(['/saree']);
  }
  onTaiButtonClick():void{
    this.router.navigate(['/tailor']);
  }
  
  
  



    ngOnInit() {
  }

}
