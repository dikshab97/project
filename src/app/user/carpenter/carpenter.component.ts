import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-carpenter',
  templateUrl: './carpenter.component.html',
  styleUrls: ['./carpenter.component.css']
})
export class CarpenterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
