import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NewAffiliationService } from './new-affiliation.service';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-affiliation',
  templateUrl: './new-affiliation.component.html',
  styleUrls: ['./new-affiliation.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class NewAffiliationComponent extends AppBaseComponent implements OnInit {
  // form = new FormGroup({});
  // model: any = {};
  // options: FormlyFormOptions = {};
  // fields: FormlyFieldConfig[];
  title = 'New Affiliation';
  // subText = 'Create';
  // mode='create';
      
  constructor(public route: ActivatedRoute,
    public router: Router,
    private newAffiliationService: NewAffiliationService) { 

      super(route,router);
    
     this.fields = newAffiliationService.getPosFields();
  }

  ngOnInit() {
   this.initialize();

  }

  
  
  submit(model) {
    console.log(model);
  }
}
