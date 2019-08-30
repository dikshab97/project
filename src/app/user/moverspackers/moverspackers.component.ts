import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-moverspackers',
  templateUrl: './moverspackers.component.html',
  styleUrls: ['./moverspackers.component.css']
})
export class MoverspackersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
