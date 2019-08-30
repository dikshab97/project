import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.css']
})
export class PlumberComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
