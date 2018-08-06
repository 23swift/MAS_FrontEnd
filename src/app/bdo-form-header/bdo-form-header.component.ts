import { Component, OnInit ,Input} from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-bdo-form-header',
  templateUrl: './bdo-form-header.component.html',
  styleUrls: ['./bdo-form-header.component.css'],
  inputs: ['text','sub_text']
})
export class BdoFormHeaderComponent implements OnInit {
  showApprovalOptions=false;
  showRequestFlowOptions=false;
  @Input() mode:string;
  constructor() { 

    
  }

  ngOnInit() {
    if(this.mode=='approval'){

      this.showApprovalOptions=true;
    }
    if(this.mode != 'create'){
      this.showRequestFlowOptions=true;
    }
  }

}
