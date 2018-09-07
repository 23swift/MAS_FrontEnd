import { Component, OnInit } from '@angular/core';


export interface ServiceFeeContractData {
  Id: number;
  Code: string;
  Value: string;
  StraightFeeRate: number;
}
const ELEMENT_DATA: ServiceFeeContractData[] = [
   { Id: 1, Code: 'Code1', Value: 'V23BB', StraightFeeRate: 1.20 },
   { Id: 2,Code: 'Code2', Value: 'V23SS', StraightFeeRate: 2 }
];

@Component({
  selector: 'app-service-fee-contract-list',
  templateUrl: './service-fee-contract-list.component.html',
  styleUrls: ['./service-fee-contract-list.component.css']
})
export class ServiceFeeContractListComponent implements OnInit {
      displayedColumns: string[] = ['Code', 'Value', 'StraightFeeRate', 'Action'];
      dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
