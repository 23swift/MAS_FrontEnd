import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AppBaseComponent } from '../../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-fee-contract',
  templateUrl: './service-fee-contract.component.html',
  styleUrls: ['./service-fee-contract.component.css']
})
export class ServiceFeeContractComponent implements OnInit {

  title = 'Service Fee Contract';
   subTitle = 'Create';
   mode='create';
   status="done";
  constructor(public route: ActivatedRoute,public router: Router) { 
    //super(route,router);
  }

  ngOnInit() {
    //this.initialize();
  }

}
