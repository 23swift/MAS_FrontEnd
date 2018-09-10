import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-fee-contract',
  templateUrl: './service-fee-contract.component.html',
  styleUrls: ['./service-fee-contract.component.css']
})
export class ServiceFeeContractComponent implements OnInit {

  title: string;
  subTitle: string;
  mode: string;
  
  constructor() { }

  ngOnInit() {
    this.title = 'Service Fee Contract';
    this.subTitle = 'Manage Service Fee Contract';
    this.mode = ' ';    
  }


}
