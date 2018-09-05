import { Component, OnInit } from '@angular/core';
import { PsServicingService } from './ps-servicing.service';

@Component({
  selector: 'app-ps-servicing',
  templateUrl: './ps-servicing.component.html',
  styleUrls: ['./ps-servicing.component.css'],
  providers: [PsServicingService]
})
export class PsServicingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
