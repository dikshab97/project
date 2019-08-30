import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.css']
})
export class SareeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
