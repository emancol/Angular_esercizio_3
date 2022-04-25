import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() userWinner: IUser[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
