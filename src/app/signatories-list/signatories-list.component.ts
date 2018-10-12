import { Component, OnInit } from '@angular/core';
import { SignatoriesListService } from './signatories-list.service';

@Component({
  selector: 'app-signatories-list',
  templateUrl: './signatories-list.component.html',
  styleUrls: ['./signatories-list.component.css'],
  providers: [SignatoriesListService]
})
export class SignatoriesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
