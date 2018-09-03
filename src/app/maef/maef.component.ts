import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MaefService } from './maef.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-maef',
  templateUrl: './maef.component.html',
  styleUrls: ['./maef.component.css']
})
export class MaefComponent extends AppBaseComponent implements OnInit {
  @Input()displayMode:boolean=false;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title: string = 'MAEF';
  subTitle: string = '';
  mode: string;
  private _maefService: MaefService;
  constructor(private maefService: MaefService, public route: ActivatedRoute,
    public router: Router) {
    super(route, router);
    this._maefService = maefService;
    this.getFields();
  }

  ngOnInit() {
    this.title = 'MAEF';
    // this.baseCreateFunction=this.create;
    // this.baseUpdateFunction=this.update;

    this.initialize();
  }

  public create() {
    alert('Create branch');
  }

  public update() {
    alert('Update Branch');
    alert(this.route.snapshot.paramMap.get('id'));
  }

  public cancel() {
    this.router.navigateByUrl('/naStep/create');
  }


  public getFields() {
    this.fields = this._maefService.getMaefFields();
  }

}
