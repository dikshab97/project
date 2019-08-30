import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-tailor',
  templateUrl: './tailor.component.html',
  styleUrls: ['./tailor.component.css']
})
export class TailorComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
