import { Component, OnInit } from '@angular/core';
import { MdmUserService } from './mdm-user.service';

@Component({
  selector: 'app-mdm-user',
  templateUrl: './mdm-user.component.html',
  styleUrls: ['./mdm-user.component.css'],
  providers: [MdmUserService]
})
export class MdmUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
