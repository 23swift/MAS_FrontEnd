import { Component, OnInit } from '@angular/core';
import { OwnersListService } from './owners-list.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css'],
  providers: [OwnersListService]
})
export class OwnersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
