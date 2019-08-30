import { Component, OnInit } from '@angular/core';


import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.css']
})
export class ElectricianComponent implements OnInit {

  constructor(private userService: UserService)
    { 

    }
    ngOnInit() {
  }

}
