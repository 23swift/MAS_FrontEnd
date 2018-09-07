import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ServiceFeeContractFormService } from './service-fee-contract-form.service';
import { AppBaseComponent } from '../../../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-fee-contract-form',
  templateUrl: './service-fee-contract-form.component.html',
  styleUrls: ['./service-fee-contract-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceFeeContractFormComponent extends AppBaseComponent implements OnInit {
    title = 'Service Fee Contract';


  constructor(public route: ActivatedRoute,
    public router: Router, private serviceFeeContractFormService: ServiceFeeContractFormService) {
  
      super(route,router);
      this.fields = serviceFeeContractFormService.getServiceFeeContractFields();
  

    }
  ngOnInit() {
    this.initialize();
  }

}
